import { reactive } from 'vue'

export const store = reactive({
  cardData: null,
  setCardData(data) {
    this.cardData = data
  },
  theme: "light",
  setTheme(theme) {
    this.theme = theme
  },
  removeCard(key) {
    this.cardData.splice(key, 1)
  }

})