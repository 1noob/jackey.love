import type { NextPage } from 'next'
import Image from 'next/image'
import cloudinary from '../utils/cloudinary'
import getBase64ImageUrl from '../utils/generateBlurPlaceholder'
import type { ImageProps } from '../utils/types'

const Home: NextPage = ({ images }: { images: ImageProps[]}) => {

  return (
    <>
      <main className="my-auto overflow-hidden max-h-screen">
        <div className="animate-[sc_210s_linear_infinite]
                        sm:animate-[sc_180s_linear_infinite]
                        md:animate-[sc_150s_linear_infinite]
                        lg:animate-[sc_120s_linear_infinite]
                        xl:animate-[sc_90s_linear_infinite]
                        2xl:animate-[sc_60s_linear_infinite]"
        >
          <div className="columns-2 gap-0 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8">
            { images.map(({ public_id, format, blurDataUrl }) => (
                <Image
                    alt="Next.js Photo"
                    className="brightness-100 mb-0"
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto/${public_id}.${format}`}
                    width={500}
                    height={500}
                    sizes="50vw, 33.3vw, 25vw, 20vw, 16.6vw">
                </Image>
            ))}
          </div>
          <div className="columns-2 gap-0 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8">
          { images.map(({ public_id, format, blurDataUrl }) => (
              <Image
                  alt="Next.js Photo"
                  className="brightness-100 mb-0"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/ar_1:1,c_fill,g_auto/${public_id}.${format}`}
                  width={500}
                  height={500}
                  sizes="50vw, 33.3vw, 25vw, 20vw, 16.6vw">
              </Image>
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
    .max_results(400)
    .execute()
  let reducedResults: ImageProps[] = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }


  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  let len = reducedResults.length
  while (len<120){
    reducedResults.push(reducedResults.at(Math.random()*1118%len))
    len++
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}
