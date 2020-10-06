(async ()=>{
    const response = await fetch ('/content');
    const res = await response.json();
    console.log(res.data.content.slice(0,94));
    document.getElementById("newsletter-1-title").innerText = res.data.title;
    document.getElementById("newsletter-1").innerText = res.data.content.slice(0,120);
})();