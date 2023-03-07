//elemento onload="ação"
/*var banner = document.getElementById('bannerImg')
function acao(){
    
    banner.src = 'imagem/banner_1.png'
}*/
function slide1(){
    document.getElementById('id').src="1.bmp";
    document.getElementById('id').src='imagem/banner_1.png'
    setTimeout("slide2()", 1000)
    }
    
    function slide2(){
    document.getElementById('id').src="2.bmp";
    document.getElementById('id').src='imagem/banner_2.png'
    setTimeout("slide3()", 1000)
    }
    
    function slide3(){
    document.getElementById('id').src="3.bmp";
    document.getElementById('id').src='imagem/banner_3.png'
    setTimeout("slide1()", 1000)
    }
    /*</script>
    <body onLoad="slide1()">
    <img id="id">*/