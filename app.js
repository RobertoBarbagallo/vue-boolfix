new Vue({
    el: "#app",

    data: {
      textToSearch: "",
      tmdbApiKey: "573397bc7c4216308a66c317bd7d4644",
      movieList: [],
      seriesList: [],
      finalList: []
    },

    computed: {

    },

    methods: {

      makeAxiosSearch(searchType){
        const axiosPar = {
          params: {
            api_key: this.tmdbApiKey,
            query: this.textToSearch,
            language: "it-IT"
          }
        }
        axios.get('https://api.themoviedb.org/3/search/' + searchType, axiosPar).then((resp) => {
            if(searchType === "movie"){
              this.movieList = resp.data.results
            } else if(searchType === "tv"){
              this.seriesList = resp.data.results.map((tvShow) => {
                tvShow.original_title = tvShow.original_name
                tvShow.title = tvShow.original_name
                return tvShow
              })
            }
        })
      this.concat()
      },

      concat(){
        return this.movieList.concat(this.seriesList)
      },
      

      doSearch(){

        this.makeAxiosSearch("movie")
        this.makeAxiosSearch("tv")
      }

    },

    mounted() {

    },
})