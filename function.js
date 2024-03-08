function datacreate(projectid,projectname){
            
            
    let data=`<p>画像が反映されない時は、ボタンをクリックしてください。</p><button class="reload">再読み込み</button><br><p>${projectname}<br><iframe src="https://turbowarp.org/${projectid}/embed?pause&clones=10000" width="499" height="416" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe></p>`;
    return data;
}
function dataiframe(projectlink){
    let projectname=projectlink.replace('.html','');
    projectname=projectname.replace('https://tamago55123.github.io/data-kagaku/','')
    let data=`<p>画像が反映されない時は、ボタンをクリックしてください。</p><button class="reload">再読み込み</button><br><p>${projectname}<br><iframe src="${projectlink}" width="499" height="416" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe></p> `;
    return data;
}
function stopif(){
    if(document.cookie.indexOf('data')==-1)document.body.innerHTML='<p style="font-size: 55px;">科学技術部作品発表ページ</p><br><p>時間切れまたはタイムアウトしました。<br>QRコードを読み直してください。</p>';
}