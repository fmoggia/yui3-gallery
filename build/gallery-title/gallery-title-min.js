YUI.add("gallery-title",function(a){a.Title=a.Base.create("title",a.Base,[a.Plugin.Host],{doc:a.config.doc,initializer:function(){this.after("titleChange",this._afterTitleChange);this.after("indicatorChange",this._afterIndicatorChange);this.after("separatorChange",this._afterSeparatorChange);if(this.get("title")===undefined){this.set("title",this.doc.title);}this.refresh();},refresh:function(){var b=this.get("indicator"),f=this.get("title"),e=this.get("separator"),d=this.get("displayTemplate"),c={indicator:"",separator:"",title:""};if(b){c.indicator=b;if(e){c.separator=e;}}c.title=f;this.doc.title=a.substitute(d,c);},_afterTitleChange:function(b){this.refresh();},_afterIndicatorChange:function(b){this.refresh();},_afterSeparatorChange:function(b){this.refresh();}},{ATTRS:{title:{},indicator:{value:""},separator:{value:" : "},displayTemplate:{value:"{indicator}{separator}{title}"}}});},"gallery-2011.03.11-23-49",{requires:["base","event","substitute","plugin-host"]});