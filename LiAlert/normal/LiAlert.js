document.head.insertAdjacentHTML('beforeend', `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
`);

class Li{
    constructor() {
	    this.Icons = {succses:"<i class='fa-regular fa-circle-check kiwngkwnlgn jjjjjfhrehfer'></i>",user:"<i class='fa-regular fa-circle-user kiwngkwnlgn'></i>",alert:"<i class='fa-solid fa-circle-exclamation'></i>"};
    }
	    Alert({theme, title, message, icon, type, buttonMessage="click me",color_icon,time=2000,text_color=null,bg_color=null,border_button_color=null,position=null}) {

		    if(position == "center"){
			    document.querySelector(":root").style.setProperty("--li_alert_justify","center");
			    document.querySelector(":root").style.setProperty("--li_alert_align","center");
		    }else if(position == "top"){
			    document.querySelector(":root").style.setProperty("--li_alert_align","flex-start");
		    }else if(position == "bottom"){
			    document.querySelector(":root").style.setProperty("--li_alert_align","flex-end");
		    }else if(position == "left"){
			    document.querySelector(":root").style.setProperty("--li_alert_justify","flex-start");
	            }else if(position == "right"){
			    document.querySelector(":root").style.setProperty("--li_alert_justify","flex-end");
		    }else if(position == "top-right"){
			    document.querySelector(":root").style.setProperty("--li_alert_align","flex-start");
			    document.querySelector(":root").style.setProperty("--li_alert_justify","flex-end");
		    }else if(position == "top-left"){
			    document.querySelector(":root").style.setProperty("--li_alert_align","flex-start");
			    document.querySelector(":root").style.setProperty("--li_alert_justify","flex-start");
		    }else if(position == "bottom-right"){
			    document.querySelector(":root").style.setProperty("--li_alert_align","flex-end");
			    document.querySelector(":root").style.setProperty("--li_alert_justify","flex-end");
		    }else if(position == "bottom-left"){
			    document.querySelector(":root").style.setProperty("--li_alert_align","flex-end");
			    document.querySelector(":root").style.setProperty("--li_alert_justify","flex-start");
		    }
		    if(theme=="dark"){
			    document.querySelector(":root").style.setProperty("--li_alert_box_color","#2F3032");
			    document.querySelector(":root").style.setProperty("--li_alert_color_g","white");
			    document.querySelector(":root").style.setProperty("--li_alert_border","white");
		    }
		    else if(theme == "light"){
                            document.querySelector(":root").style.setProperty("--li_alert_box_color","#F5F5F5");
			    document.querySelector(":root").style.setProperty("--li_alert_color_g","black");
			    document.querySelector(":root").style.setProperty("--li_alert_border","black");
		    }else if(theme == 'custom'){
			    if(bg_color == null || text_color == null || border_button_color == null){
				    console.error('the bg_color and the text_color is not valid.');
                           }else{
			 	document.querySelector(":root").style.setProperty("--li_alert_box_color",bg_color);
			    	document.querySelector(":root").style.setProperty("--li_alert_color_g",text_color);
			    	document.querySelector(":root").style.setProperty("--li_alert_border",border_button_color);
			   
			   }
		   }
		   else{
			   console.error("the theme is not is not found please enter a correct theme.");
		   }

		   if(!title){
			   console.error("you have not passed a title!")
			   return;
		   }
        	   let NewElement = `
        		<div class='li_alert_main_outer_div'>
                		<div class='li_alert_main_inner_div' >
					${icon}
                    			<h1 class='li_alert_main_inner_title'>${title}</h1>
                    			<p class='li_alert_main_inner_msg'>${message}</p>
                    			${type == 'button' ? `<button class="li_alert_main_inner_btn">${buttonMessage}</button>` : ''}
            			</div>
        		</div>

        `

        document.body.insertAdjacentHTML('afterbegin', NewElement)
	document.querySelector('.li_alert_main_outer_div i').style.color = color_icon;
        let MainEl = document.querySelector('.li_alert_main_outer_div');
        let AlertEl = document.querySelector('.li_alert_main_inner_div');
        setTimeout(() => {
            AlertEl.classList.add('showEvent');
        }, 100)
        try {
            let btn = document.querySelector('.li_alert_main_inner_btn');
            if (type == "button") {
                btn.addEventListener('click', () => {
                    AlertEl.classList.remove('showEvent');
                    setTimeout(() => {
                      MainEl.remove();

                    }, 500)
                })
            }else if(type == "time"){
		    setTimeout(() => {
                    	    AlertEl.classList.remove('showEvent');
			    setTimeout(() => {
				    MainEl.remove();
			    },500)
		    },time)
	    }else{
		    console.error("wrong type");
	    }
        } catch {

        }


    }
}


let li = new Li();

window.li = li;
