interface CommonPreload {
  filename: string
  text: string
}

interface InsertPreload extends CommonPreload {
  to: string
  data: {
    text: string
  }
}
