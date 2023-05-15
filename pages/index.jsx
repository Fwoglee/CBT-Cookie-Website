import Link from "next/link";
import Image from "next/image";

export default function Index() {
	
  return (
    <>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img width="500" src="https://wiki.hypixel.net/images/2/2a/Minecraft_items_red_mushroom.png" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
          CBT | Cookie BOT
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
       🍪Cookie bot ne işe yarar🤔? Cookie bot bir moderasyon botudur. Ve bunu farklı versiyonları yani Eğlence, Minecraft, Kayıt ve Uptime gibi versiyonlarıda mevcuttur😎. NOT: bu versiyonlar HAZIR olunca sitemize eklenecektir🤫!. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://www.youtube.com/@FWBATTM"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          🥰Kanala Abone ol!
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://discord.com/api/oauth2/authorize?client_id=1107641098379218974&permissions=8&scope=bot%20applications.commands"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
🍪Cookie'yi Davet et!</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Cookie Bot" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "Kendi sunucunuza beni ekleyerek işleri kolaylaştırmaya ne dersin?" }}/>
            <a href="https://discord.gg/mmGQEvBmR2" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Sunucumuza davetlisin!
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-cogs text-2xl text-amber-500`} /> Optimizasyon</p>
                  <p className="text-gray-500 line-clamp-4">🍪😎CBT  Cookie BOT sunucunun kötü insanlara karşı korunmanıza ve sunucunuzu daha iyi optimize etmeye yarar.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-universal-access text-2xl text-amber-500`} /> Kaynak-altyapı</p>
                  <p className="text-gray-500 line-clamp-4">🍪😚CBT Cookie botumuzyun altyapısı ArasChain tarafından hazırlanıp CBT ekibi tarafından bazı değişklikler yapılarak düzenlenmiştir!)</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-shield text-2xl text-amber-500`} /> Güvenlik</p>
                  <p className="text-gray-500 line-clamp-4">🍪👀Göz atabileceğiniz ve geliştirmemize yardımcı olabileceğiniz açık kaynaklı bir güvenli bot.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-ticket text-2xl text-amber-500`} /> Destek</p>
                  <p className="text-gray-500 line-clamp-4">🍪🤝Destek verenler: BaturexCBT#8269 ! SAD Kerem#4400 .</p>
                </div>
              </div>
          </div>
      </div>



      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://cdn.discordapp.com/attachments/737348411568685066/983094813115170866/unknown.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white font-semibold">En iyi botum!</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-5">En iyi ve en güncel bot Cookie ile en iyi Korumaları yapmaya hazır mısınız??</p>
                </div>
                <img src="https://ih1.redbubble.net/image.1394795339.1413/pp,840x830-pad,1000x1000,f8f8f8.jpg" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>

      </>
  )
}
