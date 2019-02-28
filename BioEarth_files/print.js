function addPrintLink(enable){var retVal=false;if(enable){var target=this.document,printViewLink=null,childEls=null,listEl=null,newli=null,counter=0,foundUL=false;printViewLink=this.document.createElement('a');newli=this.document.createElement('li');if((printViewLink!==null)&&(newli!==null)){if(target.getElementById('toolbar')){childEls=target.getElementById('toolbar').childNodes;if(childEls&&(childEls.length>0)){counter=childEls.length-1;do{listEl=childEls[counter--];if((listEl!==null)&&(listEl.nodeType===1)){if(listEl.tagName.toLowerCase()!=='ul'){listEl=null}else{foundUL=true;break}}}while(counter>0)}if(foundUL){if(listEl!==null){printViewLink.id='printViewLink';printViewLink.setAttribute('onmouseover','this.style.cursor=\'pointer\'');printViewLink.setAttribute('href','javascript:popPrintPage();');printViewLink.innerHTML='Print';newli.id='printViewListItem';newli.appendChild(printViewLink);listEl.appendChild(newli);retVal=true}}else{target.getElementById('toolbar').appendChild(this.document.createElement('ul'));addPrintLink(enable)}}}}return retVal}function elementExists(el,check){var retVal=false;if((el!==null)&&(el.toString().length>0)&&(check!==null)&&(check.getElementsByTagName!==null)){if(check.getElementsByTagName(el).length>0){retVal=true}}return retVal}function buildBasePage(target){var el=null,doc=null,retVal=target;if(target.document){target.document.open();doc=target.document;if(doc!==null){if(!elementExists('html',doc)){el=doc.createElement('html');doc.appendChild(el)}if(!elementExists('head',doc)){el=doc.createElement('head');doc.getElementsByTagName('html')[0].appendChild(el)}el=doc.createElement('title');if(this.document.getElementsByTagName('title').length>0){el.innerText="Print View :: "+this.document.getElementsByTagName('title')[0].innerText}doc.getElementsByTagName('head')[0].appendChild(el);doc.close()}}return retVal}function addElementByName(target,targetElName,el){if((target!==null)&&(target.document!==null)){try{target.document.getElementsByTagName(targetElName)[0].appendChild(el)}catch(ex){target.document.getElementsByTagName(targetElName)[0].innerHTML+=el.outerHTML}}}function addDefaultCSS(target){var doc=null,headEl=null,el=null,counter=0;if(elementExists('head',this.document)){headEl=this.document.getElementsByTagName("head")[0];if(headEl.childNodes!==null){for(counter=0;headEl.childNodes[counter];counter++){if((headEl.childNodes[counter]!==null)&&(headEl.childNodes[counter].type!==null)&&(headEl.childNodes[counter].type==="text/css")){el=null;if(headEl.childNodes[counter].tagName.toLowerCase()==="link"){if((headEl.childNodes[counter].rel!==null)&&(headEl.childNodes[counter].rel==="stylesheet")){el=target.document.createElement("link");el.rel="stylesheet";el.type="text/css";el.href=headEl.childNodes[counter].href}}else if(headEl.childNodes[counter].tagName.toLowerCase()==="style"){if(headEl.childNodes[counter].innerHTML){el=target.document.createElement("style");el.setAttribute("type","text/css");try{el.innerHTML=headEl.childNodes[counter].innerHTML}catch(ex){if(el.styleSheet){el.styleSheet.cssText=headEl.childNodes[counter].innerHTML}}}}if(el!==null){addElementByName(target,"head",el)}}}}}}function addPrintCSS(target){if((target!==null)&&(target.document!==null)){var el=null;el=target.document.createElement('link');el.type='text/css';el.rel='stylesheet';el.href='https://images.wsu.edu/css/print2.css';addElementByName(target,"head",el)}}function addPrintContent(target){var retVal=target;if(target.document){if(elementExists('body',target.document)){var el=null,pcp=null;pcp=target.document.createElement('div');pcp.id='printingControl';pcp.style.backgroundColor='gray';pcp.style.paddingTop='3px';pcp.style.paddingBottom='3px';pcp.style.paddingLeft='5px';el=null;el=target.document.createElement('button');el.id='printButton';el.style.marginLeft='20px';el.setAttribute("onclick","function closeWindow() { window.close(); return false; } document.getElementById('printingControl').style.display = 'none'; window.print();setTimeout(closeWindow, 500); return false;");el.appendChild(target.document.createTextNode('Print'));pcp.appendChild(el);addElementByName(target,"body",pcp)}}return retVal}function addWSUFooter(target){if((target!==null)&&(target.document!==null)){if(this.document.getElementById('wsufooter')!==null){addElementByName(target,"body",this.document.getElementById('wsufooter').cloneNode(true))}}}function popPrintPage(){var pageContent=null,printWindow=null,script=null,pwBody=null,leDiv=null,contentDivs=['main','secondary','additional','localfooter'];printWindow=this.window.open();if(printWindow!==null){printWindow=buildBasePage(printWindow);addDefaultCSS(printWindow);addPrintCSS(printWindow);if(printWindow!==null){if(!elementExists('body',printWindow.document)){printWindow.document.getElementsByTagName('html')[0].appendChild(printWindow.document.createElement('body'))}addPrintContent(printWindow);if(this.document.getElementById('wrapper')!==null){pageContent=this.document.getElementById('wrapper').cloneNode(true);while(pageContent.getElementsByTagName('script').length){script=pageContent.getElementsByTagName('script')[0];script.parentNode.removeChild(script)}}else{pageContent=""}addElementByName(printWindow,"body",pageContent);addWSUFooter(printWindow);printWindow.focus()}}return void(null)}
