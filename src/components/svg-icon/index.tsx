import { FC, SVGProps } from 'react'

import {
   Celsius,
   Fahrenheit,
   Sun,
   Cloud,
   Rain,
   Snow,
   CloudSnowRain,
   CloudSunSnowRain,
   CloudWindy,
   CloudSunSWind,
   CloudPartly,
   Moon,
} from '../../assets/icons'

const icons = {
   moon: Moon,
   celsius: Celsius,
   fahrenheit: Fahrenheit,
   cloudy: Cloud,
   rainy: Rain,
   snowy: Snow,
   sunny: Sun,
   ['cloudy-snowy-rainy']: CloudSnowRain,
   ['cloudy-sunny-snowy-rainy']: CloudSunSnowRain,
   ['cloudy-windy']: CloudWindy,
   ['cloudy-sunny-windy']: CloudSunSWind,
   ['cloudy-partly']: CloudPartly,
}

type SvgIconProps = SVGProps<SVGSVGElement> & { type: keyof typeof icons }

export const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
   const Icon = icons[type] ?? null

   return Icon && <Icon {...svgProps} />
}
