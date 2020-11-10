async function getData()
{
    const data = await fetch('https://itunes.apple.com/us/rss/topsongs/all/limit=15/json');
    let dataJson = await data.json();

    let containerContent = document.querySelector('.container-content');
    let feedtype = document.querySelector('#feedtype');
    let quatity = document.querySelector('#quantity');
    feedtype.value = 'topalbums';
    quatity.value = '50';

    feedtype.onmouseleave = (function()
        {
        
            if( feedtype.value  == "topalbums")
            {
                
                printalbum();
            }
            else {
                printsong();
            } 

        })

    let element;
    function printalbum(){

        containerContent.innerHTML="";

        for(let  i = 0; i < dataJson.feed.entry.length; i++)
        {
            // tạo 1 cái div để chứa các phần tử con
            element = document.createElement('div');
            element.setAttribute('class', 'content');

            //tạo tên cho bài hát
            let elementName = document.createElement('p');
            elementName.setAttribute('class', 'name');
            
            // tạo tên ca sĩ bài hát đó
            let elementArtis = document.createElement('p');
            elementArtis.setAttribute('class', 'artis');

            // tạo ảnh bài hát đó
            let elementImage = document.createElement('img');
            elementImage.setAttribute('class', 'image');
            elementImage.setAttribute('src',`${dataJson.feed.entry[i]["im:image"][1]["label"]}`)
            
            // gắn nội dung cho các thẻ để show ra màn hình
            elementName.textContent  = dataJson.feed.entry[i]["im:collection"]["im:name"]["label"];
            elementArtis.textContent  = dataJson.feed.entry[i]["im:artist"]["label"];
            elementImage.innerHTML  = dataJson.feed.entry[i]["im:name"][2];
            
            // add những thẻ đấy vào div chứa ban đầu
            element.appendChild(elementImage);
            element.appendChild(elementName);
            element.appendChild(elementArtis);
            
            // add vào thẻ tổng bên html
            containerContent.appendChild(element);

            // console.log(element);

        }
    }
    
    function printsong(){

        containerContent.innerHTML="";

        for(let  i = 0; i < dataJson.feed.entry.length; i++)
        {
            
            // tạo 1 cái div để chứa các phần tử con
            element = document.createElement('div');
            element.setAttribute('class', 'content');

            //tạo tên cho bài hát
            let elementName = document.createElement('p');
            elementName.setAttribute('class', 'name');
            
            // tạo tên ca sĩ bài hát đó
            let elementArtis = document.createElement('p');
            elementArtis.setAttribute('class', 'artis');

            // tạo ảnh bài hát đó
            let elementImage = document.createElement('img');
            elementImage.setAttribute('class', 'image');
            elementImage.setAttribute('src',`${dataJson.feed.entry[i]["im:image"][1]["label"]}`)

            // tạo mục preview để bấm vào là nổi nhạc
            let elementContainerPreview = document.createElement('div')
            elementContainerPreview.setAttribute('class', 'preview');
            elementContainerPreview.style.cursor = 'pointer';

            let audio = `
                <audio autoplay>
                    <source src="${dataJson.feed.entry[i]["link"][1]["attributes"]["href"]}" type="audio/ogg">
                </audio>
            `

            let audioPlay = document.getElementById('audio-play')
            elementContainerPreview.onclick = function() {
            // console.log(audio)

            audioPlay.innerHTML = "";
            audioPlay.innerHTML = audio;
            }

            // thẻ con của preview - để hiện chữ preview ra màn hình
            let p = document.createElement('p');
            p.textContent = "Preview";

            //thẻ con của preview - thẻ audio để chứa âm thanh
            let elementAudio = document.createElement('audio');
            elementAudio.setAttribute('class', 'audio');

            //thẻ con của preview - thẻ source âm thanh
            // let source = document.createElement('source');
            // source.setAttribute('src',`${dataJson.feed.entry[i]["link"][1]["attributes"]["href"]}`);
            // elementAudio.appendChild(source);
            
            // cho các thẻ con vào thẻ mẹ
            elementContainerPreview.appendChild(p);
            elementContainerPreview.appendChild(elementAudio);

            // gắn nội dung cho các thẻ để show ra màn hình
            elementName.textContent  = dataJson.feed.entry[i]["im:name"]["label"];
            elementArtis.textContent  = dataJson.feed.entry[i]["im:artist"]["label"];
            elementImage.innerHTML  = dataJson.feed.entry[i]["im:name"][2];
            
            // add những thẻ đấy vào div chứa ban đầu
            element.appendChild(elementImage);
            element.appendChild(elementName);
            element.appendChild(elementArtis);
            element.appendChild(elementContainerPreview);

            // add vào thẻ tổng bên html
            containerContent.appendChild(element);

            // console.log(element);
            
        }
    }
}
getData();