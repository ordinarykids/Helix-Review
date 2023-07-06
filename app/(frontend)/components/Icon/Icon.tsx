import Helix from './iconSet/Helix'
import IncreasingBarChart from './iconSet/IncreasingBarChart'
import Laptop from './iconSet/Laptop'
import LineBarChart from './iconSet/LineBarChart'
import MagnifyingGlass from './iconSet/MagnifyingGlass'
import Network from './iconSet/Network'
import ShieldPlusSign from './iconSet/ShieldPlusSign'

export type IconType =
  | 'helix'
  | 'increasingBarChart'
  | 'laptop'
  | 'lineBarChart'
  | 'magnifyingGlass'
  | 'network'
  | 'shieldPlusSign'

interface IconProps {
  icon: IconType
}

const icons = {
  helix: Helix,
  increasingBarChart: IncreasingBarChart,
  laptop: Laptop,
  lineBarChart: LineBarChart,
  magnifyingGlass: MagnifyingGlass,
  network: Network,
  shieldPlusSign: ShieldPlusSign,
}

export default function Icon({ icon }: IconProps) {
  const IconComponent = icons[icon]
  return <IconComponent />
}
