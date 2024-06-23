interface CardItem {
  title: string
  text: string
  icons: string[]
}

interface TileItemTextBlock {
  subtitle: string
  text: string
}

interface TileItem {
  title: string
  textBlocks: TileItemTextBlock[]
}
