import Spline from '@splinetool/react-spline';

export default function Hero(){
  return (
    <section className="relative rounded-xl overflow-hidden" style={{background:'#009688'}}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 px-8 py-16 sm:px-10 lg:px-14 lg:py-24 text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Insurance Portal</h1>
        <p className="mt-3 max-w-3xl text-white/90">Access policy documents, submit claims, and communicate with your dedicated broker team whenever you need assistance.</p>
        <div className="mt-6 flex gap-3">
          <a href="/policies" className="inline-flex items-center justify-center rounded-lg bg-white text-teal-700 font-medium px-4 py-2 shadow hover:shadow-md transition">View Policies</a>
          <a href="/documents" className="inline-flex items-center justify-center rounded-lg bg-teal-600 text-white font-medium px-4 py-2 shadow hover:bg-teal-500 transition">Upload Documents</a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20 pointer-events-none" />
    </section>
  )
}
