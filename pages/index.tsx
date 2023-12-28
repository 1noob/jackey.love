import type { NextPage } from 'next'
import cloudinary from '../utils/cloudinary'
import type { ImageProps } from '../utils/types'
import {Image} from "@nextui-org/react";

const Home: NextPage = ({ images }: { images: ImageProps[]}) => {

  return (
    <>
      <main className="my-auto overflow-hidden scroll-smooth max-h-screen">
        <div className="animate-[sc_360s_linear_infinite]
                        sm:animate-[sc_330s_linear_infinite]
                        md:animate-[sc_300s_linear_infinite]
                        lg:animate-[sc_270s_linear_infinite]
                        xl:animate-[sc_240s_linear_infinite]
                        2xl:animate-[sc_210s_linear_infinite]"
        >
          <div className="columns-2 gap-0 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8">
            { images.map(({ public_id, format }) => (
                <Image
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto/${public_id}.${format}`}
                    width={500}
                />
            ))}
          </div>
          <div className="columns-2 gap-0 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8">
            { images.map(({ public_id, format }) => (
                <Image
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto/${public_id}.${format}`}
                    width={500}
                />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by('public_id', 'desc')
    .max_results(480)
    .execute()
  let reducedResults: ImageProps[] = []

  for (let result of results.resources) {
    reducedResults.push({
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
  }

  for (let i = reducedResults.length; i < 120; i++) {
    let tmp = reducedResults.at(Math.random()*1118%i)
    reducedResults.push(tmp)
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}
