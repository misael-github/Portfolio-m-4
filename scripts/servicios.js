        function addContent (params = {}){
        const template = document.querySelector(".section-my-services--template")
        const container = document.querySelector(".template-content")
        
        
        template.content.querySelector(".my-services__article--img").src = params.image
        
        template.content.querySelector(".my-services__article--sub-title").textContent = params.subTitleTemplate
        
        template.content.querySelector(".my-services__article--text").textContent = params.textTemplate
        
        const clone = document.importNode(template.content, true);
        container.appendChild(clone);
        }
        
        
        function getData(){
            return fetch(
                "https://cdn.contentful.com/spaces/65tugjdrayxe/environments/master/entries?access_token=cce7c4Jk31S0qKDiyAmkg1LB3Y1U4EvZN2GV7lc2Dwo&content_type=bienvenida"
              )
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                
                  const fieldsCollection = data.items.map((item) => {
                      console.log(item)
                    console.log(item.fields.bienvenida)
                   return {
                    // title: item.fields.bienvenida,
                    subTitle: item.fields.bienvenidaSubTitle,
                    sectionMyText:item.fields.sectionAboutMyText,
                    image: item.fields.url,
                    subTitleTemplate: item.fields.subTitleSectionMyServices,
                    textTemplate: item.fields.textSectionMyServices
                   }
                   
                  });
                  
                  return fieldsCollection;
                });
            }
        
        function main() {
            getData().then((works) => {
              for(const w of works){
                // a addContent le paso cada vuelta del for que  devuelve cada array con su objeto
                  addContent(w)
              }
            })
            const headerEl = document.querySelector(".container-header__template")
            header(headerEl)
            
            const footerEl = document.querySelector(".container-footer__template")
            viewFooter(footerEl)

            viewIcons();
        }
        main()
