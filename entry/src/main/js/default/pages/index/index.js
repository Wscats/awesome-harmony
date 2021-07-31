export default {
    data: {
        modeFlag: "full",
        galleryUrl: "https://pic1.zhimg.com/v2-3be05963f5f3753a8cb75b6692154d4a_1440w.jpg?source=172ae18b",
    },
    showGallery(e) {
        this.$element('gallery').show()
    },
    closeGallery(e) {
        if(e.target.type==='image') return
        this.$element('gallery').close()
    },
    changeMode(e) {
        this.modeFlag = e.mode
    }
}