import { Header } from "./components/Header"


export default function HomePage(){
  return(
    <div className="flex flex-col w-full h-screen">
      <Header/>
      <section className="grid grid-cols-12 place-items-center h-full">
        <main className="col-span-8 border-r border-gray-300 w-full h-full">This space is used for main</main>
        <aside className="col-span-4 h-full w-full">This space is used for sidebar</aside>
      </section>
    </div>
  )
}

