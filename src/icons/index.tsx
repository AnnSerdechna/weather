import { FC, SVGProps } from 'react'

import { default as Celsius } from './celsius.svg'
import { default as Fahrenheit } from './fahrenheit.svg'
import { default as Sun } from './sunny.svg'
import { default as Cloud } from './cloudy.svg'
import { default as Rain } from './rain.svg'
import { default as Snow } from './snow.svg'
import { default as CloudSnowRain } from './cloudy-snow-rain.svg'
import { default as CloudSunSnowRain } from './cloudy-sun-snow-rain.svg'
import { default as CloudWindy } from './cloudy-windy.svg'
import { default as CloudSunSWind } from './cloudy-sunny-windy.svg'
import { default as CloudPartly } from './partly-cloudy.svg'

const icons = {
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
   ['cloudy-partlyy']: CloudPartly,
}

type SvgIconProps = SVGProps<SVGSVGElement> & { type: keyof typeof icons }

export const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
   const Icon = icons[type] ?? null

   return Icon && <Icon {...svgProps} />
}
