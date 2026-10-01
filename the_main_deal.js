

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

export function get_MPWS()
	{
		return new MPWS();
	}

function MPWS()
{
	
	
	
	this.state = 0n;
	this.ssylki = {c:100n,l:{p:null,n:null,leaf:[]}};
	this.just_append = (e)=>{
				let c = this.ssylki.c;
				let le = this.ssylki.l;
				if(le.leaf.length==c)
					{
						let tmp = {p:le,n:null,leaf:[]};
						le.n=tmp;
						this.ssylki.l=tmp;
						this.just_append(e);
					}
				else
					le.leaf.push(e);
				};
	this.just_clean = (e)=>
			{
				while(e.childNodes.length!=0n)
					e.removeChild(e.childNodes[0n]);
			};
	this.just_init = ()=>
		{
		let d = this.d = (e)=>
				{
					let q = document.createElement('div');
					q.setAttribute('id',e);
					return q;
				};
		let st = this.struct={};
		this.state=-1n;
		let main_window = d('the_main_window');
		st.main_window=main_window;
		let the_menu_bar = d('the_menu_bar');
		st.the_menu_bar=the_menu_bar;
		let the_main_menu = d('the_main_menu');
		st.the_main_menu=the_main_menu;
		let partial_menu = d('partial_menu');
		st.partial_menu=partial_menu;
		let content_page = d('content_page');
		st.content_page=content_page;
		main_window.appendChild(the_menu_bar);
		the_menu_bar.appendChild(the_main_menu);
		the_menu_bar.appendChild(partial_menu);
		main_window.appendChild(content_page);
		this.just_clean(document.body);
		document.body.appendChild(main_window);
		
		
		};
	
	
	
	 this.notepad=
		{
			the_notepad:{pm:null,c:null},
			to_notepad:()=>
				{
					let d = this.d;
					let ETTO = this.notepad;
					(async()=>
						{
							let q;
							let knopy=1;
							if(ETTO.the_notepad.pm==null)
								{
									let i = 0n,qwe=[document.createElement('div')];
									while(i<3n)
										{
											i++;
											let tmp = document.createElement('div');
											tmp.setAttribute("class",'knopy');
											qwe.push(tmp);
										    qwe[0n].appendChild(tmp);
										}
									qwe[1n].innerText="Создать файл";
									qwe[2n].innerText="Сохранить";
									qwe[3n].innerText="ез действия";
									q = ETTO.the_notepad.pm = qwe;
								}
							else
								q = ETTO.the_notepad.pm;
							this.just_clean(this.struct.partial_menu);
							this.struct.partial_menu.appendChild(q[0n]);
							
							let novo, sohran;
							
							novo = ()=>
									{
										let qwe=ETTO.the_notepad.c = document.createElement('div');
										qwe.setAttribute('style',"width:100%;height:100%;");
										qwe.setAttribute('contenteditable',true);
										this.just_clean(this.struct.content_page);
										this.struct.content_page.appendChild(ETTO.the_notepad.c);
									};
							q[1n].addEventListener("click",async ()=>{novo();});
							
							q[2n].addEventListener('click',async()=>
									{
									let te = this.struct.content_page.childNodes[0n].innerText;
									let blo = new Blob([te],{type:'text'});
									let u = URL.createObjectURL(blo);
									let a = document.createElement('a');
									a.setAttribute('href',u);
									a.download="text";
									a.addEventListener('load',()=>
											{
												URL.revokeObjectURL(u);
											});
									a.click();
									}
									);
							
							
							
						})();
					(async()=>
						{
							if(ETTO.the_notepad.c==null)
								{
								let qwe = ETTO.the_notepad.c = document.createElement('div');
								qwe.setAttribute('style',"width:100%;height:100%;");
								qwe.setAttribute('contenteditable',true);
								}
							this.just_clean(this.struct.content_page);
							this.struct.content_page.appendChild(ETTO.the_notepad.c);
							
						})();
				}
		};
	
	
	
	this.createNew=()=>{return new MPWS();};
			
	
	this.just_init();
	
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

