

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
	this.the_state = 0n;
	this.just_clean = async (e)=> {
		console.log(e);
		while(e.childNodes.length!=0n)
			e.removeChild(e.childNodes[0n]);
	};
	
	this.body_to_clean = async ()=>{
			while(document.body.childNodes.length!=0n)
				document.body.removeChild(document.body.childNodes[0n]);
	};
	//the editor template
	let tmp = (this.the_editor_template={}).create_new=()=>{
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
			return (this.the_editor_template.the = main_window);
			};
	this.the_editor_template.refresh=()=>{
						this.just_clean(this.the_editor_template.the.childNodes[1n]);
										};
										
	//notepad
	this.notepad={};
	this.notepad.create_new_list = ()=>
		{
			let tmp = document.createElement('div');
			tmp.setAttribute("contenteditable",'true');
			tmp.setAttribute("style","overflow:auto;border-style:solid;border-width:2px;border-color:#5e6959;width:98%;height:98%;padding:auto auto auto auto ;");
			tmp.setAttribute("id","notepad_edit_place");
			return tmp;
		}
	this.notepad.create_notepad_menu = ()=>
			{
				let v,tmp=0;
				v = document.createElement('div');
				//v.setAttribute("style","wid");
				(tmp = document.createElement("div")).innerText="Новый файл";//setAttribute("innerText","Новый файл");
				v.appendChild(tmp);
				
				(tmp = document.createElement("div")).innerText="Сохранить";//setAttribute("innerText","Сохранить");
				v.appendChild(tmp);
				console.log(v);
				return v;
			};
	
	this.notepad.to_notepad = async()=>{
			if(this.the_state==1n)
				{
					let tmp=0;
					await this.just_clean(tmp=this.the_editor_template.the.childNodes[1n]);
					tmp.appendChild(this.notepad.create_new_list());
				}
			else
				{
					(async()=>{
					let tmp=0;
					await this.just_clean(tmp=this.the_editor_template.the.childNodes[1n]);
					tmp.appendChild(this.notepad.create_new_list());	
					})();
					(async()=>{
						let tmp = 0;
						await this.just_clean(tmp=this.the_editor_template.the.childNodes[0n].childNodes[1n]);
						tmp.appendChild(this.notepad.create_notepad_menu());
					})();
					
				}
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

