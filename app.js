
new Vue({
  el: "#app",

  data: {
    textToSearch: "",
    savedText: "",
    tmdbApiKey: "573397bc7c4216308a66c317bd7d4644",
    moviesList: [],
    seriesList: [],
    showSearch: false,
    tempFinalList: [],
    finaFullArray: [],
    resetDone: false,
    finalList: "",
    finalListFiltered: [],
    selectedGenre: "",
    selectedType: "",
    finalListGenres: [],
    finalTypesList: [],
    genreListShow: false,
    typeListShow: false,
    genresOpen: false,
    typesOpen: false,
    loading: false,
    buttonLoadShow: false,
    moviesPages: "",
    seriesPages: "",
    existMoviesPages: true,
    existSeriesPages: true,
    toReset: false,
    posterUri: "https://image.tmdb.org/t/p",
    posterSize: "/w342",
    ajaxLenght: 0,
    languages_by_locale: {
      af_NA: "Afrikaans (Namibia)",
      af_ZA: "Afrikaans (South Africa)",
      ak_GH: "Akan (Ghana)",
      sq_AL: "Albanian (Albania)",
      am_ET: "Amharic (Ethiopia)",
      ar_DZ: "Arabic (Algeria)",
      ar_BH: "Arabic (Bahrain)",
      ar_EG: "Arabic (Egypt)",
      ar_IQ: "Arabic (Iraq)",
      ar_JO: "Arabic (Jordan)",
      ar_KW: "Arabic (Kuwait)",
      ar_LB: "Arabic (Lebanon)",
      ar_LY: "Arabic (Libya)",
      ar_MA: "Arabic (Morocco)",
      ar_OM: "Arabic (Oman)",
      ar_QA: "Arabic (Qatar)",
      ar_SA: "Arabic (Saudi Arabia)",
      ar_SD: "Arabic (Sudan)",
      ar_SY: "Arabic (Syria)",
      ar_TN: "Arabic (Tunisia)",
      ar_AE: "Arabic (United Arab Emirates)",
      ar_YE: "Arabic (Yemen)",
      hy_AM: "Armenian (Armenia)",
      as_IN: "Assamese (India)",
      bm_ML: "Bambara (Mali)",
      eu_ES: "Basque (Spain)",
      be_BY: "Belarusian (Belarus)",
      bn_BD: "Bengali (Bangladesh)",
      bn_IN: "Bengali (India)",
      bs_BA: "Bosnian (Bosnia and Herzegovina)",
      bg_BG: "Bulgarian (Bulgaria)",
      my_MM: "Burmese (Myanmar [Burma])",
      ca_ES: "Catalan (Spain)",
      chr_US: "Cherokee (United States)",
      cgg_UG: "Chiga (Uganda)",
      zh_CN: "Chinese (Simplified Han, China)",
      zh_HK: "Chinese (Simplified Han, Hong Kong SAR China)",
      zh_MO: "Chinese (Simplified Han, Macau SAR China)",
      zh_SG: "Chinese (Simplified Han, Singapore)",
      zh_HK: "Chinese (Traditional Han, Hong Kong SAR China)",
      kw_GB: "Cornish (United Kingdom)",
      hr_HR: "Croatian (Croatia)",
      cs_CZ: "Czech (Czech Republic)",
      da_DK: "Danish (Denmark)",
      nl_BE: "Dutch (Belgium)",
      nl_NL: "Dutch (Netherlands)",
      ebu_KE: "Embu (Kenya)",
      en_AS: "English (American Samoa)",
      en_AU: "English (Australia)",
      en_BE: "English (Belgium)",
      en_BZ: "English (Belize)",
      en_BW: "English (Botswana)",
      en_CA: "English (Canada)",
      en_GU: "English (Guam)",
      en_HK: "English (Hong Kong SAR China)",
      en_IN: "English (India)",
      en_IE: "English (Ireland)",
      en_IL: "English (Israel)",
      en_JM: "English (Jamaica)",
      en_MT: "English (Malta)",
      en_MH: "English (Marshall Islands)",
      en_MU: "English (Mauritius)",
      en_NA: "English (Namibia)",
      en_NZ: "English (New Zealand)",
      en_MP: "English (Northern Mariana Islands)",
      en_PK: "English (Pakistan)",
      en_PH: "English (Philippines)",
      en_SG: "English (Singapore)",
      en_ZA: "English (South Africa)",
      en_TT: "English (Trinidad and Tobago)",
      en_UM: "English (U.S. Minor Outlying Islands)",
      en_VI: "English (U.S. Virgin Islands)",
      en_GB: "English (United Kingdom)",
      en_US: "English (United States)",
      en_ZW: "English (Zimbabwe)",
      et_EE: "Estonian (Estonia)",
      ee_GH: "Ewe (Ghana)",
      ee_TG: "Ewe (Togo)",
      fo_FO: "Faroese (Faroe Islands)",
      fi_FI: "Finnish (Finland)",
      fr_BE: "French (Belgium)",
      fr_BJ: "French (Benin)",
      fr_BF: "French (Burkina Faso)",
      fr_BI: "French (Burundi)",
      fr_CM: "French (Cameroon)",
      fr_CA: "French (Canada)",
      fr_CF: "French (Central African Republic)",
      fr_TD: "French (Chad)",
      fr_KM: "French (Comoros)",
      fr_CG: "French (Congo - Brazzaville)",
      fr_CD: "French (Congo - Kinshasa)",
      fr_CI: "French (Côte d’Ivoire)",
      fr_DJ: "French (Djibouti)",
      fr_GQ: "French (Equatorial Guinea)",
      fr_FR: "French (France)",
      fr_GA: "French (Gabon)",
      fr_GP: "French (Guadeloupe)",
      fr_GN: "French (Guinea)",
      fr_LU: "French (Luxembourg)",
      fr_MG: "French (Madagascar)",
      fr_ML: "French (Mali)",
      fr_MQ: "French (Martinique)",
      fr_MC: "French (Monaco)",
      fr_NE: "French (Niger)",
      fr_RW: "French (Rwanda)",
      fr_RE: "French (Réunion)",
      fr_BL: "French (Saint Barthélemy)",
      fr_MF: "French (Saint Martin)",
      fr_SN: "French (Senegal)",
      fr_CH: "French (Switzerland)",
      fr_TG: "French (Togo)",
      ff_SN: "Fulah (Senegal)",
      gl_ES: "Galician (Spain)",
      lg_UG: "Ganda (Uganda)",
      ka_GE: "Georgian (Georgia)",
      de_AT: "German (Austria)",
      de_BE: "German (Belgium)",
      de_DE: "German (Germany)",
      de_LI: "German (Liechtenstein)",
      de_LU: "German (Luxembourg)",
      de_CH: "German (Switzerland)",
      el_CY: "Greek (Cyprus)",
      el_GR: "Greek (Greece)",
      gu_IN: "Gujarati (India)",
      haw_US: "Hawaiian (United States)",
      he_IL: "Hebrew (Israel)",
      hi_IN: "Hindi (India)",
      hu_HU: "Hungarian (Hungary)",
      is_IS: "Icelandic (Iceland)",
      ig_NG: "Igbo (Nigeria)",
      id_ID: "Indonesian (Indonesia)",
      ga_IE: "Irish (Ireland)",
      it_IT: "Italian (Italy)",
      it_CH: "Italian (Switzerland)",
      ja_JP: "Japanese (Japan)",
      kea_CV: "Kabuverdianu (Cape Verde)",
      kab_DZ: "Kabyle (Algeria)",
      kl_GL: "Kalaallisut (Greenland)",
      kln_KE: "Kalenjin (Kenya)",
      kam_KE: "Kamba (Kenya)",
      kn_IN: "Kannada (India)",
      km_KH: "Khmer (Cambodia)",
      ki_KE: "Kikuyu (Kenya)",
      rw_RW: "Kinyarwanda (Rwanda)",
      ko_KR: "Korean (South Korea)",
      khq_ML: "Koyra Chiini (Mali)",
      ses_ML: "Koyraboro Senni (Mali)",
      lag_TZ: "Langi (Tanzania)",
      lv_LV: "Latvian (Latvia)",
      lt_LT: "Lithuanian (Lithuania)",
      luo_KE: "Luo (Kenya)",
      luy_KE: "Luyia (Kenya)",
      mk_MK: "Macedonian (Macedonia)",
      jmc_TZ: "Machame (Tanzania)",
      kde_TZ: "Makonde (Tanzania)",
      mg_MG: "Malagasy (Madagascar)",
      ms_BN: "Malay (Brunei)",
      ms_MY: "Malay (Malaysia)",
      ml_IN: "Malayalam (India)",
      mt_MT: "Maltese (Malta)",
      gv_GB: "Manx (United Kingdom)",
      mr_IN: "Marathi (India)",
      mas_KE: "Masai (Kenya)",
      mas_TZ: "Masai (Tanzania)",
      mer_KE: "Meru (Kenya)",
      mfe_MU: "Morisyen (Mauritius)",
      naq_NA: "Nama (Namibia)",
      ne_IN: "Nepali (India)",
      ne_NP: "Nepali (Nepal)",
      nd_ZW: "North Ndebele (Zimbabwe)",
      nb_NO: "Norwegian Bokmål (Norway)",
      nn_NO: "Norwegian Nynorsk (Norway)",
      nyn_UG: "Nyankole (Uganda)",
      or_IN: "Oriya (India)",
      om_ET: "Oromo (Ethiopia)",
      om_KE: "Oromo (Kenya)",
      ps_AF: "Pashto (Afghanistan)",
      fa_AF: "Persian (Afghanistan)",
      fa_IR: "Persian (Iran)",
      pl_PL: "Polish (Poland)",
      pt_BR: "Portuguese (Brazil)",
      pt_GW: "Portuguese (Guinea-Bissau)",
      pt_MZ: "Portuguese (Mozambique)",
      pt_PT: "Portuguese (Portugal)",
      ro_MD: "Romanian (Moldova)",
      ro_RO: "Romanian (Romania)",
      rm_CH: "Romansh (Switzerland)",
      rof_TZ: "Rombo (Tanzania)",
      ru_MD: "Russian (Moldova)",
      ru_RU: "Russian (Russia)",
      ru_UA: "Russian (Ukraine)",
      rwk_TZ: "Rwa (Tanzania)",
      saq_KE: "Samburu (Kenya)",
      sg_CF: "Sango (Central African Republic)",
      seh_MZ: "Sena (Mozambique)",
      sn_ZW: "Shona (Zimbabwe)",
      ii_CN: "Sichuan Yi (China)",
      si_LK: "Sinhala (Sri Lanka)",
      sk_SK: "Slovak (Slovakia)",
      sl_SI: "Slovenian (Slovenia)",
      xog_UG: "Soga (Uganda)",
      so_DJ: "Somali (Djibouti)",
      so_ET: "Somali (Ethiopia)",
      so_KE: "Somali (Kenya)",
      so_SO: "Somali (Somalia)",
      es_AR: "Spanish (Argentina)",
      es_BO: "Spanish (Bolivia)",
      es_CL: "Spanish (Chile)",
      es_CO: "Spanish (Colombia)",
      es_CR: "Spanish (Costa Rica)",
      es_DO: "Spanish (Dominican Republic)",
      es_EC: "Spanish (Ecuador)",
      es_SV: "Spanish (El Salvador)",
      es_GQ: "Spanish (Equatorial Guinea)",
      es_GT: "Spanish (Guatemala)",
      es_HN: "Spanish (Honduras)",
      es_MX: "Spanish (Mexico)",
      es_NI: "Spanish (Nicaragua)",
      es_PA: "Spanish (Panama)",
      es_PY: "Spanish (Paraguay)",
      es_PE: "Spanish (Peru)",
      es_PR: "Spanish (Puerto Rico)",
      es_ES: "Spanish (Spain)",
      es_US: "Spanish (United States)",
      es_UY: "Spanish (Uruguay)",
      es_VE: "Spanish (Venezuela)",
      sw_KE: "Swahili (Kenya)",
      sw_TZ: "Swahili (Tanzania)",
      sv_FI: "Swedish (Finland)",
      sv_SE: "Swedish (Sweden)",
      gsw_CH: "Swiss German (Switzerland)",
      dav_KE: "Taita (Kenya)",
      ta_IN: "Tamil (India)",
      ta_LK: "Tamil (Sri Lanka)",
      te_IN: "Telugu (India)",
      teo_KE: "Teso (Kenya)",
      teo_UG: "Teso (Uganda)",
      th_TH: "Thai (Thailand)",
      bo_CN: "Tibetan (China)",
      bo_IN: "Tibetan (India)",
      ti_ER: "Tigrinya (Eritrea)",
      ti_ET: "Tigrinya (Ethiopia)",
      to_TO: "Tonga (Tonga)",
      tr_TR: "Turkish (Turkey)",
      uk_UA: "Ukrainian (Ukraine)",
      ur_IN: "Urdu (India)",
      ur_PK: "Urdu (Pakistan)",
      vi_VN: "Vietnamese (Vietnam)",
      vun_TZ: "Vunjo (Tanzania)",
      cy_GB: "Welsh (United Kingdom)",
      yo_NG: "Yoruba (Nigeria)",
      zu_ZA: "Zulu (South Africa)",
    }

  },

  computed: {

  },

  methods: {

    voteShow(film) {
      film.voteClick = !film.voteClick;
    },

    overviewShow(film) {
      film.overviewClick = !film.overviewClick;
    },

    actShow(film) {
      film.actorClick = !film.actorClick;
    },

    makeAxiosSearch(searchType, page) {

      this.ajaxLength++;
      const axiosPar = {
        params: {
          api_key: this.tmdbApiKey,
          query: this.textToSearch,
          page: page,
          language: "it-IT"
        }
      };
      axios.get('https://api.themoviedb.org/3/search/' + searchType, axiosPar).then((resp) => {
        this.ajaxLength--;
        if (searchType === "movie") {

          if (resp.data.results) {
            this.moviesList.push(resp.data.results);
            this.moviesList.forEach(movieArray => {
              movieArray.forEach(movie => {
                this.$set(movie, "searchType", searchType);
              });
            });
            if (resp.data.page <= resp.data.total_pages) {
              this.buttonLoadShow = true;
              this.existMoviesPages = true;
              this.moviesPages++;
            } else {
              this.existMoviesPages = false;
              this.buttonLoadShow = false;
            }
          }
        } else if (searchType === "tv") {
          if (resp.data.results) {
            this.seriesList.searchType = searchType;
            this.seriesList.push(resp.data.results.map((tvShow) => {
              tvShow.original_title = tvShow.original_name;
              tvShow.title = tvShow.original_name;
              return tvShow;
            }));
            this.seriesList.forEach(showArray => {
              showArray.forEach(show => {
                this.$set(show, "searchType", searchType);
              });


            });
            if (resp.data.page <= resp.data.total_pages) {
              this.buttonLoadShow = true;
              this.existSeriesPages = true;
              this.seriesPages++;
            } else {
              this.existSeriesPages = false;
              this.buttonLoadShow = false;
            }
          }

        }
        if (this.ajaxLength == 0) {
          this.render();
        }
      });
    },

    render() {
      let tempArray = [];
      const apikey = {
        params: {
          api_key: this.tmdbApiKey,
          language: "it-IT"
        }
      };

      this.tempFinalList = [];
      this.finaFullArray = [];

      Array.prototype.push.apply(this.tempFinalList, this.moviesList.concat(this.seriesList));

      for (let i = 0; i < this.tempFinalList.length; i++) {
        const array = this.tempFinalList[i];
        for (let j = 0; j < array.length; j++) {
          const film = array[j];
          this.finaFullArray.push(film);
          this.$set(film, "flags", []);
          this.$set(film, "fullStars", 0);
          this.$set(film, "emptyStars", 0);
          this.$set(film, "voteClick", false);
          this.$set(film, "overviewClick", false);
          this.$set(film, "actorClick", false);
          this.$set(film, "actorsExist", false);
          this.$set(film, "actors", []);
          this.$set(film, "genres", []);
          axios.get('https://api.themoviedb.org/3/' + film.searchType + "/" + film.id, apikey).then((resp) => {
            tempArray = resp.data.genres;
            tempArray.forEach(genre => {
              film.genres.push(genre.name);
              this.actorsShow(film);
            });
          });

        }
      }

      this.finalList = this.finaFullArray;
      this.finalListFiltered = this.finalList;
      this.myFlagAssign();
      this.starAssign();
      this.loading = false;
    },

    myFlagAssign() {
      const objKeys = Object.keys(this.languages_by_locale);

      for (let index = 0; index < objKeys.length; index++) {
        const language = objKeys[index];

        for (let i = 0; i < this.finalList.length; i++) {
          const film = this.finalList[i];
          if (language.startsWith(film.original_language)) {
            film.flags.push("flag-icon-" + language.substring(film.original_language.length + 1).toLowerCase());
          }
        }
      }
    },

    starAssign() {
      this.finalList.forEach(film => {
        film.fullStars = Math.ceil(film.vote_average / 2);
        film.emptyStars = 5 - film.fullStars;
      });
    },

    actorsShow(film) {
      let tempArray = [];
      const filmID = film.id;
      const apikey = {
        params: {
          api_key: this.tmdbApiKey,
          language: "it-IT"
        }
      };
      axios.get('https://api.themoviedb.org/3/' + film.searchType + "/" + filmID + "/credits", apikey).then((resp) => {
        if (resp.data.cast && resp.data.cast.length !== 0) {
          film.actorsExist = true;
          tempArray = resp.data.cast;
          tempArray.forEach(actor => {
            film.actors.push(actor.name);
          });
        }
        film.actors = film.actors.slice(0, 5);
      });

    },

    showGenres() {
      this.genreListShow = !this.genreListShow;
      this.finalList.forEach(film => {
        film.genres.forEach(genre => {
          if (!this.finalListGenres.includes(genre)) {
            this.finalListGenres.push(genre);
          }
        });
      });
      this.genresOpen = !this.genresOpen;
    },

    showTypes() {
      this.typeListShow = !this.typeListShow;
      this.finalList.forEach(film => {
        if (!this.finalTypesList.includes(film.searchType)) {
          this.finalTypesList.push(film.searchType);
        }
      });
      this.typesOpen = !this.typesOpen;
    },

    filterFinaList(genre) {
      this.selectedGenre = "";
      this.selectedGenre = genre;
      this.finalListFiltered = this.finalList.filter(film => film.genres.includes(genre));
    },

    filterFinaListForType(type) {
      this.selectedType = "";
      this.selectedType = type;
      this.finalListFiltered = this.finalList.filter(film => film.searchType == type);
    },

    defaultFilter() {
      this.selectedGenre = "";
      this.finalListFiltered = this.finalList;
    },

    defaultTypeFilter() {
      this.selectedType = "";
      this.finalListFiltered = this.finalList;
    },


    doSearch(param) {

      if (param == true) {
        this.ajaxLength = 0;
        if (this.existMoviesPages) {
          this.makeAxiosSearch("movie", this.moviesPages);
        }
        if (this.existSeriesPages) {
          this.makeAxiosSearch("tv", this.seriesPages);
        }
        this.loading = true;
        this.selectedGenre = "";
        this.selectedType = "";
        this.toReset = true;
      } else {
        this.ajaxLength = 0;
        if (this.existMoviesPages) {
          this.makeAxiosSearch("movie", this.moviesPages);
        }
        if (this.existSeriesPages) {
          this.makeAxiosSearch("tv", this.seriesPages);
        }
        this.loading = true;
        this.selectedGenre = "";
        this.selectedType = "";
        this.toReset = false;
        console.log("carica altro");
      }
      if (this.toReset) {
        this.reset();
      }
    },

    openSearchBar() {
      this.showSearch = true;
    },

    reset() {
      this.moviesPages = 1;
      this.seriesPages = 1;
      this.moviesList = [];
      this.seriesList = [];
      this.tempFinalList = [];
      this.finalList = [];
      this.finaFullArray = [];
      this.finalListGenres = [];
      this.finalListFiltered = [];
      this.resetDone = true;
      this.existMoviesPages = false;
      this.existSeriesPages = false;
    }
  },

  mounted() {
  },


});