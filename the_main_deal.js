

let QQQ = 123;
let the_flag = 0n;
let the_state = 0n;

export function set(e)
	{QQQ=e;
	if(the_flag==0n)
		{
			the_flag = 1n;
			QQQ = e;
		}
	}
//export function get(){return QQQ;}



function MPWS()
{
	this.just_clean = async (e)=> {
		while(e.childNodes.length!=0n)
			e.removeChild(e.childNodes[0n]);
	};
	
	this.body_to_clean = async ()=>{
			while(document.body.childNodes.length!=0n)
				document.body.removeChild(document.body.childNodes[0n]);
	};
	//the editor template
	this.the_editor_template={};
	let tmp = this.the_editor_template.create_new=()=>{
			let main_window = document.createElement('div');
			main_window.setAttribute('id','editor_main_window');
			let tmp =0;
			(tmp = document.createElement('div')).setAttribute('id',"edit_menu_bar");
			let menu_bar = tmp;
			main_window.appendChild(tmp);
			(tmp = document.createElement('div')).setAttribute('id',"main_menu_bar");
			menu_bar.appendChild(tmp);
			(tmp = document.createElement('div')).setAttribute('id',"the_editor_menu_bar");
			menu_bar.appendChild(tmp);
			(tmp = document.createElement('div')).setAttribute('id',"content_page");
			main_window.appendChild(tmp);
			return main_window;
			};
	
	
}



export function set_all(FFF)
{
	let xhr = new XMLHttpRequest();
	xhr.open("GET",'css.css');
	xhr.onload=(e)=>{
				
				let css=QQQ.css={};
				css.txt = e.target.response;
				css.blo = new Blob([css.txt],{'type':"stylesheet"});
				let tag=css.tag = document.createElement('link');
				//tag.setAttribute("type","text/stylesheet");
				tag.setAttribute("rel","stylesheet");
				tag.setAttribute("href",css.url = URL.createObjectURL(css.blo));
				document.head.appendChild(tag);
				};
	FFF(new MPWS());
	xhr.send();
	
	
	
	
}

