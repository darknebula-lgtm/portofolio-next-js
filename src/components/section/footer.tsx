export default function Footer(){
    return (
        <footer className="bg-neutral-950 text-neutral-300">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
                <p className="font-semibold text-white">Nama Kamu</p>
                <p className="text-neutral-500">
                    &copy; {new Date().getFullYear()} Nama Kamu. All rights reserved.
                </p>
            </div>
        </footer>
    )
}