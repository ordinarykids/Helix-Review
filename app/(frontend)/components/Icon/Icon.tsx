import Heart from './iconSet/Heart'
import Helix from './iconSet/Helix'
import IncreasingBarChart from './iconSet/IncreasingBarChart'
import Laptop from './iconSet/Laptop'
import Lightbulb from './iconSet/Lightbulb'
import LineBarChart from './iconSet/LineBarChart'
import MagnifyingGlass from './iconSet/MagnifyingGlass'
import Network from './iconSet/Network'
import ShieldPlusSign from './iconSet/ShieldPlusSign'

export type IconType =
  | 'heart'
  | 'helix'
  | 'increasingBarChart'
  | 'laptop'
  | 'lightbulb'
  | 'lineBarChart'
  | 'magnifyingGlass'
  | 'network'
  | 'shieldPlusSign'

export type IconColor =
  | '#7ABC71'
  | '#F8BE08'
  | '#F45B83'
  | '#3F4C77'

interface IconProps {
  icon: IconType
  color?: IconColor
}

const icons = {
  heart: Heart,
  helix: Helix,
  increasingBarChart: IncreasingBarChart,
  laptop: Laptop,
  lightbulb: Lightbulb,
  lineBarChart: LineBarChart,
  magnifyingGlass: MagnifyingGlass,
  network: Network,
  shieldPlusSign: ShieldPlusSign,
}

export default function Icon({ icon, color }: IconProps) {
  const IconComponent = icons[icon]
  return <IconComponent color={color} />
}
