import Script from 'next/script'

export const metadata = {
  title: 'Razorpay Payment Gateway',
  description: 'This is a demo project demonstrating payment gateway integration with razorpay in next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </html>
  )
}