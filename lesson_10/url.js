const urls = ['url1', 'url2', 'url3', 'url4'];
function fakeFetch(url) {
    const delay = Math.floor(Math.random() * 1000) + 500; // от 500 до 1500 мс
    return new Promise(resolve => {
        setTimeout(() => resolve({ url, time: delay }), delay);
    });
}

async function loadAll() {
const arrOfUrls = await Promise.all(urls.map(el => fakeFetch(el)))
const start = Date.now()
for (let i = 0; i < arrOfUrls.length; i++) {
    const element = arrOfUrls[i];
    console.log(`Загружено: ${element.url} за ${element.time} мс`);
    
}
const end = Date.now()
console.log(`Все данные загружены за ${end - start} мс`);


}
// loadAll();


async function loadSequentially() {
   const start = Date.now()
    for (let i = 0; i < urls.length; i++) {
        const element = urls[i];
        const url = await fakeFetch(element)
        console.log(`Загружено: ${url.url} за ${url.time} мс (${i + 1}/${urls.length})`);
        let percent = Math.floor((i + 1) * 100 / urls.length);
        let bar = '='.repeat(percent / 25) + '.'.repeat(4 - percent / 25);
        console.log(`[${bar}] ${percent}%`);
    }
    const end = Date.now()
    console.log(`Все данные загружены за ${end - start} мс`);
}
// loadSequentially();
const urls2 = ['url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7', 'url8'];
async function loadWithLimit() {
    const limit = 3;
    let activeRequests = 0;
    let index = 0;
    let load = 0;
    const results = [];
    const start = Date.now()
    const loadNext = async () => {
        if (index >= urls2.length) return;
        activeRequests++;
        const currentIndex = index++;
        const currentUrl = urls2[currentIndex];
        const result = await fakeFetch(currentUrl);
        results[currentIndex] = result;
        load++;
        console.log(`Загружено: ${result.url} за ${result.time} мс (${currentIndex + 1}/${urls.length})`);
        let percent = Math.floor(load * 100 / urls.length);
        const barCount = Math.min(8, Math.floor(percent / 25));
        let bar = '='.repeat(barCount) + '.'.repeat(8 - barCount);
        console.log(`[${bar}] ${percent}%`);

        activeRequests--;
        if (activeRequests < limit) {
            loadNext();
        }
    };
    for (let i = 0; i < limit; i++) {
        loadNext();
    };
    while (activeRequests > 0) {
        await new Promise(resolve => setTimeout(resolve, 100));
    };
    const end = Date.now();
    console.log(`Все данные загружены за ${end - start} мс`);
}
loadWithLimit();