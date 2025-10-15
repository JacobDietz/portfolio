
import './index.css'
export default function DynamicBckg() {
    return (
        <div className='fixed inset-0 -z-10 flex items-center justify-center min-h-screen min-w-screen bg-gradient-to-r 
        from-indigo-200 via-zinc-100 to-slate-300' >
            <section className="absolute fifth-layer blur-3xl opacity-90 bg-sky-300 rounded-4xl border-3 border-dotted
  h-[30dvh] aspect-[1/1]    -translate-x-20 translate-y-20"></section>

            <section className="fourth-layer absolute blur-3xl opacity-90 bg-amber-300 rounded-4xl  
  h-[30dvh] aspect-[1/1] -translate-x-20 -translate-y-20"></section>

            <section className="third-layer absolute blur-3xl opacity-90 bg-lime-600 rounded-4xl 
   h-[30dvh] aspect-[1/1] translate-x-20 translate-y-20"></section>

            <section className="second-layer absolute blur-3xl opacity-90 bg-red-300 rounded-4xl 
   h-[30dvh] aspect-[1/1] translate-x-20 -translate-y-20"></section>

            <section className="first-layer relative bg-indigo-400  rounded-4xl blur-3xl opacity-90  
   h-[30dvh] aspect-[1/1] flex items-center justify-center">
            </section>

        </div>
    )
}