import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/lib/mongodb';

import { Resend } from 'resend';

import { UAParser } from 'ua-parser-js';

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parser = new UAParser(
        body.userAgent || ''
    );

    const browser =
        parser.getBrowser().name || 'Unknown';

    const os =
        parser.getOS().name || 'Unknown';

    const device =
        parser.getDevice().type || 'desktop';

    const ip =
      req.headers.get('x-forwarded-for');

    const country =
      req.headers.get('x-vercel-ip-country');

    const city =
      req.headers.get('x-vercel-ip-city');

    const region =
      req.headers.get(
        'x-vercel-ip-country-region'
      );

    const visitorData = {
      latitude: body.latitude,
      longitude: body.longitude,

      timezone: body.timezone,

      referrer: body.referrer || 'Direct',

      browser,
      os,
      device,

      ip,
      country,
      city,
      region,

      createdAt: new Date(),
    };

    // Save to MongoDB
    const db = await connectDB();

    await db
      .collection('visitors')
      .insertOne(visitorData);

    // Send Email
    await resend.emails.send({
      from: 'onboarding@resend.dev',

      to: 'ayushagrawal1234.ips@gmail.com',

      subject: '🚀 New Portfolio Visitor',

      html: `
        <h2>New Visitor Detected</h2>

        <p><strong>GPS:</strong>
        ${body.latitude || 'Not allowed'},
        ${body.longitude || 'Not allowed'}
        </p>

        <p><strong>Location:</strong>
        ${city || 'Unknown'},
        ${region || ''},
        ${country || ''}
        </p>

        <p><strong>Browser:</strong>
        ${browser}
        </p>

        <p><strong>OS:</strong>
        ${os}
        </p>

        <p><strong>Device:</strong>
        ${device}
        </p>

        <p><strong>Timezone:</strong>
        ${body.timezone}
        </p>

        <p><strong>Referrer:</strong>
        ${body.referrer || 'Direct'}
        </p>

        <p><strong>IP:</strong>
        ${ip}
        </p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}