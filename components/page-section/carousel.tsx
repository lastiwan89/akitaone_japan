import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const CarouselHero = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div>
            <Card>
              <CardContent>
                <Image
                  src="/DANIEL-CEO-AKITAONEJAPAN.jpg"
                  alt="ceo akitaone"
                  width={300}
                  height={300}
                />
              </CardContent>
              <CardFooter>
                <CardTitle>CEO AkitaOne Japan</CardTitle>
              </CardFooter>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export default CarouselHero
