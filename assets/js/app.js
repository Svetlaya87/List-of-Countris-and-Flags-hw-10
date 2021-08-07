
    const URL = 'https://restcountries.eu/rest/v2/all';
    const appConfig ={
        data(){
            return{
                title: 'Countries App',
                countriesList:[],
                
                sort:'up',
                sortCode:null,
                sortCapital:null,
                search:''
                
            }
        },
        async mounted(){
            // этот метод сработает, когда приложение загружено, смонтировано и отрисовано на экране. т.е подгрузка данных не помешает первичному отображению приложения
            let result = await fetch(URL);
            result = await result.json();
            

            for(let i=0; i<result.length; i++){
                for(let j=0; j< result[i].borders.length; j++){
                    result[i].borders[j] = `https://restcountries.eu/data/${result[i].borders[j].toLowerCase()}.svg`;
                    
                    
                    
                    
                    
                    
                }
            }
            console.log(result);
            this.countriesList = result;
            //this.addBorderFlag();
    
        },
        methods:{
            forSearchFilter(item){
                    let s = this.search.toLowerCase().trim();
                if( item.name.toLowerCase().trim().includes(s) ){
                    return true;
                }

                if( item.alpha2Code.toLowerCase().trim().includes(s) ){
                    return true;
                }

                if( item.alpha3Code.toLowerCase().trim().includes(s) ){
                    return true;
                }

                if( item.capital.toLowerCase().trim().includes(s) ){
                    return true;
                }

                return false;


            },

            toggleSort(){

                this.sortCode=null;
                this.sortCapital=null;

                if(this.sort=='up'){
                    this.sort='down';
                } else{
                    this.sort='up';
                }


            },
            toggleSortCod(){
                this.sort=null;
                this.sortCapital=null;

                if(this.sortCode=='up'){
                    this.sortCode='down';
                } else{
                    this.sortCode='up';
                }

            },
            toggleSortCapital(){
                this.sort=null;
                this.sortCode=null;

                if(this.sortCapital=='up'){
                    this.sortCapital='down';
                } else{
                    this.sortCapital='up';
                }

            }



        },
        computed:{
           

            sortedCountries(){
                // фильтруем
                let list = this.countriesList.filter(this.forSearchFilter);

                
                
                // сортировка по столбцу Name
                if(this.sort){
                    if(this.sort=='up'){
                        list.sort(function(a,b){
                           
                            if (a.name>b.name){
                                return 1;

                            }
                            if(a.name<b.name){
                                return -1;
                            }
                            return 0;
                           
                        });
                        
                    }else {
                        list.sort(function(a,b){
                           
                            if (a.name>b.name){
                                return -1;

                            }
                            if(a.name<b.name){
                                return 1;
                            }
                            return 0;
                           
                        });
                        
                    
                    } 
                    
                }

                //сортировка по столбцу Code
                if(this.sortCode){
                    
                    if(this.sortCode=='up'){

                        list.sort(function(a,b){
                           
                            if (a.alpha2Code>b.alpha2Code){
                                return 1;

                            }
                            if(a.alpha2Code<b.alpha2Code){
                                return -1;
                            }
                            return 0;
                           
                        });
                       
                    }else {
                        list.sort(function(a,b){
                           
                            if (a.alpha2Code>b.alpha2Code){
                                return -1;

                            }
                            if(a.alpha2Code<b.alpha2Code){
                                return 1;
                            }
                            return 0;
                           
                        });
                        
                     
                    } 
                    
                }

                //сортировка по столбцу Capital
                if(this.sortCapital){
                    
                    if(this.sortCapital=='up'){

                        list.sort(function(a,b){
                           
                            if (a.capital>b.capital){
                                return 1;

                            }
                            if(a.capital<b.capital){
                                return -1;
                            }
                            return 0;
                           
                        });
                       
                    }else {
                        list.sort(function(a,b){
                           
                            if (a.capital>b.capital){
                                return -1;

                            }
                            if(a.capital<b.capital){
                                return 1;
                            }
                            return 0;
                           
                        });
                        
                      
                    } 
                    
                }

                
                
                   
                
                    
    
                   
                // и возвращаем то что получилось
                return list;
            }

        }


    }
    
    const app= Vue.createApp(appConfig);
    app.mount('#app');

    //console.log( vm.borderFlags);
    

    //let x=0; //-1 должно быть 1, если1, то должно быть -1
    //x=-x;

