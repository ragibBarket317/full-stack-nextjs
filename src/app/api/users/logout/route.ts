import { NextResponse } from 'next/server'

export async function GET() {
  try {
    //clear cookie
    const response = NextResponse.json(
      { message: 'Logout successful', success: true },
      { status: 200 }
    )

    response.cookies.set('token', '', {
      httpOnly: true,
      expires: new Date(0),
    })

    return response
  } catch (error: any) {
    console.log(error.message)
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 })
  }
}
