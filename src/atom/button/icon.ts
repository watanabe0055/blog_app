import arrow_right_solid from './arrow_right_solid.svg'

const Icon = (props: string) => {
  switch (props) {
    case 'SHOW':
      return 'arrow_right_solid'
      break
    case 'INDEX':
      return '値Bの処理'
      break
    case 'DELETE':
      return '値Bの処理'
      break
    default:
      return ' 値Aと値B以外の処理'
      break
  }
}
export default Icon
