import styles from 'styles/hero.module.scss'
import Image from 'next/image'
import imgixLoader from '/lib/image'
// import cube from 'images/cube.jpg'

const cube = {
  src: 'https://images.microcms-assets.io/assets/c5e21c401f6445c2af597ecbfe4873dc/71015b5d955c44b5bb30ef76f8cc9505/cube.jpg',
  width: 1300,
  height: 1500,
  blurDataURL: 'data:image/png;base64,'
}

export default function Hero({ title, subtitle, imageOn = false}) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{ title }</h1>
        <p className={styles.subtitle}>{ subtitle }</p>
      </div>
      { imageOn && (
        <figure className={styles.image}>
          <Image 
            loader={imgixLoader}
            src={cube} 
            style={{
              width: '100%',
              height: 'auto'
            }}
          />
        </figure>
      )}
    </div>
  )
}