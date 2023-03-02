main = function () {
	//private menbers

	//private methods
	function init() {
		console.log('main is loaded.');

		// monitorService.onLogin(_res=>{
		// 	console.log(_res)
		// });

		// monitorService.onAlert(_res => {
		// 	let content = _res;
		// 	alert(content)
		// });


		let dataset = [];

		for(let i=0; i<20; i++) {
			let newNum = 5+Math.floor(Math.random()*30);
			dataset.push(newNum);
		}

		// console.log(dataset)

		const odd = d3.selectAll("h3")
			.select(function (d, i) {
				return i & 1 ? this : null;
			});

		const even = d3.selectAll("h3")
			.select(function (d, i) {
				return i & 1 ? null : this;
			});

		const merged = odd.merge(even).nodes();
		// console.log(even)
		
		// i&1  按位與運算，取2進制整數i的最低位，如果最低位是1則得1，如果最低位是0則得0。奇數i的最低位是1，偶數i的最低位是0。


		d3.selectAll('h3').on("click",function(e){
			d3.select(this).style("color","red");
		})

		d3.select('.practice').append('p').text("I'm pracing append.")

		d3.select('.demo').selectAll('div') // 選取 class 內的 div
			.data(dataset) // 將資料加入至 div
			.enter() // return data
			.append('div') // 這邊加入的div已包含data
			.attr('class','bar') // 套用class
			.style('height',function(d){
				return (d*3) + 'px'
			}) // 將 data 的值取出做為高

		const multiData = ["綁","定","資","料"];
		const bindUnmatchData = d3.select(".unmatchData").data(multiData);
		// console.log("bindUnmatchData",bindUnmatchData)


		// const joinDatum = [{name:'jin'}, {name:'JIN'}]
		// const jDatum = d3.select('.join').datum(joinDatum)
		// console.log('joinDatum',joinDatum)

		// const joinData = [{name:'jin'}, {name:'JIN'}]
		// const jData = d3.selectAll('.join').data(joinData)
		// console.log('jData',jData)


		const enterData = ["資","料","比","較","多"];
		const eData = d3.select('.enterData')
						.selectAll('div')
						.data(enterData)
						.enter()
						.append('div')
						.text(d=>d)

		const exitData = ["資","料","少"]
		const exData = d3.select('.exitData')
						.selectAll('div')
						.data(exitData)
						.exit()
						.remove()


		const joinEventData = ["A","B","C","D"];
		const jeData = d3.select(".joinEventData")
						.selectAll("div")
						.data(joinEventData)
						.join("div")  // 把 exit 跟 enter 一起處理
						.attr("class","item")
						.text(d => d)

		// const matrix = [
		// 	[11975,  5871, 8916, 2868],
		// 	[ 1951, 10048, 2060, 6171],
		// 	[ 8010, 16145, 8090, 8045],
		// 	[ 1013,   990,  940, 6907]
		// 	];
			
		// 	d3.select("body")
		// 	.append("table")
		// 	.selectAll("tr")
		// 	.data(matrix)
		// 	.join("tr")
		// 	.selectAll("td")
		// 	.data(d => d)
		// 	.join("td")
		// 		.text(d => d);


		// const dataChange = document.querySelector(".dataChange");
		// const showData = document.querySelector(".showData");
		// let randomData = [];

		// const rangeSelect = d3.select(".example")
		// .append('svg')
		// .attr('width', 500)
		// .attr('height', 500)
		// drawDiagram();

		
		// dataChange.addEventListener("change",function(e){
		// 	randomData = [];
		// 	for(let i=0; i<e.target.value; i++) {
		// 		let random = Math.floor(Math.random()*5)
		// 		randomData.push(random);
		// 	}
		// 	console.log(randomData)

		// 	showData.innerHTML = randomData;

		// 	drawDiagram();
		// })

		// function drawDiagram(){
		// 	rangeSelect.selectAll("rect")
		// 				.data(randomData)
		// 				.join("rect")
		// 				.attr("width",d=>d*60)
		// 				.attr("height",50)
		// 				.style('fill',"blue")
		// 				.attr("x",(d,idx)=>0)
		// 				.attr("y",(d,idx)=>idx*60)
		// }

		// getData();

		const statisticsData = [7, 5, 1, 13, 55, 2, 64, null];
		// console.log(d3.sum(statisticsData))
		// console.log(d3.sort(statisticsData))

		const date = "2022-11-8"
		const timeParse = d3.timeParse('%Y-%m-%d');
		const parsedData = timeParse(date)
		console.log(parsedData)
		
		const timeFormat = d3.timeFormat('%Y/%m/%d')
		const formatData = timeFormat(parsedData)
		// console.log(formatData)

		const randomSet = d3.randomInt(50,100);
		// console.log(randomSet())


		const lineData = [{x:10,y:10},{x:20,y:10},{x:30,y:30},{x:40,y:10},{x:50,y:10}]
		const line = d3.line()
						.x(d=>d.x)
						.y(d=>d.y)
		console.log(line(lineData))

		d3.select('.line')
			.append('path')
			.attr('d',line(lineData))
			.attr('stroke','black')
			.attr('stroke-width','2')
			.attr('fill','none')

	
		const areaData = [{x:10,y:100},{x:20,y:100},{x:30,y:100},{x:90,y:20},{x:220,y:10}]
		const area = d3.area()
						.x(d=>d.x) //x軸座標
						.y1(d=>d.y) //y軸座標
						.y0(10) //開始繪製區域的y軸範圍
		const d3AreaData = area(areaData);
		d3.select('.area')
			.append('path')
			.attr('d',d3AreaData)
			.attr('stroke','blue')
			.attr('fill','blue')

		const arc = d3.arc()
					.innerRadius(40) 
					.outerRadius(50) 
					.startAngle(Math.PI*1.2)
					.endAngle(Math.PI*2.8)
		console.log(arc())
		d3.select('.arc')
			.append('g')
			.attr('transform','translate(100,100)')
			.append('path')
			.attr('d',arc())
			.attr('stroke','orange')
			.attr('fill','orange')


		const scaleLinearData = [{x:10,y:100},{x:20,y:100},{x:30,y:100},{x:90,y:20},{x:220,y:10}];
		const xData = scaleLinearData.map(data => data.x)

		const xScale = d3.scaleLinear() // 這裡建立一個線性比例尺
						.domain([0, d3.max(xData)]) // 設定比例範圍 0 與 220 (資料集最大值)
						.range([0, 290]) // 設定取值範圍 0 至 290，座標軸長度

		d3.select('.axis')
			.selectAll('rect')
			.data(scaleLinearData)
			.join('rect')
			.attr('width', d=>xScale(d.x))
			.attr('height', 10)
			.attr('x', 0)
			.attr('y', (d,i)=>i*30)
			.attr('stroke', 'blue')
			.attr('fill', 'blue')

		// const xAxis = d3.axisBottom(xScale); // //使用xScale的設定，繪製刻度(ticks)朝下的軸線
		const xAxis = d3.axisBottom(xScale).tickSize(50).tickPadding(10);; // tickSize() ：更改座標軸刻線長度

		d3.select('.axis')
			.append("g") // 供繪製座標時的 實際位置範圍
			.call(xAxis); // 將軸線匯入

		

		const dataStack = [
			{month: new Date(2021, 0, 1), China: 132, America: 80, Taiwan: 30},
			{month: new Date(2021, 1, 1), China: 67, America: 27, Taiwan: 188},
			{month: new Date(2021, 2, 1), China: 123, America: 153, Taiwan: 18},
			{month: new Date(2021, 3, 1), China: 27, America: 112, Taiwan: 20}
		];

		const stack = d3.stack().keys(['China', 'America', 'Taiwan']) // 設定資料的keys
		const stackedSeries = stack(dataStack); // 把資料帶入stack方法
		console.log(stackedSeries)
		console.log(stackedSeries[1].key)

		// 顏色
		const colorScale = d3.scaleOrdinal()
							.domain(['China', 'America', 'Taiwan'])
							.range(["red", "blue", "orange"])
		console.log(colorScale('China'))

		const g = d3.select('.stack')
				.selectAll('g')
				.data(stackedSeries)
				.join('g')
				.attr('fill',d=>colorScale(d.key))
		g.selectAll('rect')
			.data(d=>d) 
			.join('rect')
			.attr('width',d=>d[1] - d[0])
			.attr('x',d=>d[0])
			.attr('y',(d, i)=>i*30)
			.attr('height',20)


		let data1 = [150, 122, 133, 161, 116, 139, 143, 115, 193, 137, 122, 141];
		let data2 = [180, 146, 180, 172, 133, 149, 152, 138, 188, 192, 117, 146];


		const svg = d3.select('.chartContainer').append('svg');
		svg.attr('width', 500)
			.attr('height', 300);

		svg.selectAll('rect')
			.data(data1)
			.join('rect')
			.attr('width',d=>d)
			.attr('height', 20)
			.attr('x', 0)
			.attr('y', (d,i)=>i*30)
			.attr('fill', 'orange')

		d3.select('#start')
			.on('click',function(){
				svg.selectAll('rect')
					.data(data2)
					.transition()
					.duration(1000)
					.delay((d,i)=>i*200)
					.attr('width',d=>d)
					.attr('fill','#66f9ff')
			})

		
		const pointArea = d3.select('.point').attr('style',"position: relative; width :500px; height: 500px; background: blue")
		const pointTxt = pointArea.append('text')
		pointArea.on('mousemove',function(){
			let pt = d3.pointer(event, pointArea.node())
			console.log(pt)
			pointTxt.attr('style',`position: absolute; left: ${parseInt(pt[0])}px; top: ${parseInt(pt[1])}px `)
					.attr('y',pt[1])
					.text(`X: ${parseInt(pt[0])} | Y: ${parseInt(pt[1])} `)
		})

		// const mouseData = [130, 210, 90, 250]

		// const pointSvg = d3.select('.point')
		// 	.append('svg')
		// 	.attr('width',500)
		// 	.attr('height',500)
		// const pointDots = pointSvg.selectAll('circle')
		// 	.data(mouseData)
		// 	.join('circle')
		// 	.attr('cx', d=>d)
		// 	.attr('cy',(d,i)=>(i+1)*60)
		// 	.attr('r',15)
		// 	.attr('fill','blue')
		// 	.attr('cursor','pointer')
		// 	.attr('transform-origin','center center')

		// pointDots.on('mouseover', function(){
		// 	d3.select(this)
		// 		.transition()
		// 		.attr('fill', 'red')
		// 		.attr('r','20')
		// })
		// pointDots.on('mouseleave', function(){
		// 	d3.select(this)
		// 		.transition()
		// 		.attr('fill', 'blue')
		// 		.attr('r','15')
		// })

		const tooltipsData =[
			{'r': 17 , 'x': 134, y: 181, 'color':'red'},
			{'r': 23 , 'x': 294, y: 131, 'color':'yellow'},
			{'r': 14 , 'x': 84, y: 273, 'color':'orange'},
			{'r': 9 , 'x': 323, y: 59, 'color':'blue'},
			{'r': 18 , 'x': 172, y: 251, 'color':'green'},
			{'r': 26 , 'x': 404, y: 154, 'color':'pink'}
		]
		const tooltipSvg = d3.select('.tooltip2')
							.append('svg')
							.attr('width',300)
							.attr('height',300)
		const circles = tooltipSvg
			.selectAll('circle')
			.data(tooltipsData)
			.join('circle')
			.attr('r', d => d.r)
			.attr('cx', d => d.x)
			.attr('cy', d => d.y)
			.attr('fill', d => d.color)
			.style('cursor', 'pointer');

		const tooltip = d3.select('.tooltip2')
						.append('div')
						.attr('class','tool')
						.style('position','absolute')
						.style('visibility','hidden')
						.style('width','100px')
						.style('height','50px')
						.style('border','2px solid #000')
						.style('border-radius','5px')


		circles.on('mouseover',function(){
			tooltip.style('visibility','visible')
		})
		.on('mousemove', function(d){
			let pt = d3.pointer(event, this);
			console.log(pt)
			let r = d.target.__data__.r
			console.log(d.target.__data__.r)
			tooltip.style('left',pt[0]+30+'px')
					.style('top',pt[1]+'px')
					.text('圓半徑：'+r)
		})
		.on('mouseleave', function(){
			tooltip.style('visibility','hidden')
		})

		const dragData = [{name:'A', x:200, y:340},
			{name:'B', x:220, y:300},
			{name:'C', x:250, y:198},
			{name:'D', x:360,y:296},
			{name:'E', x:160, y:150},
			{name:'F', x:370, y:360},
			{name:'G', x:187, y:250}
		]

		const dragsvg = d3.select('.drag')
						.append('svg')
						.attr('width',400)
						.attr('height',400)
		const dots = dragsvg
					.selectAll('circle')
					.data(dragData)
					.join("circle")
					.attr('cx',d=>d.x)
					.attr('cy',d=>d.y)
					.attr('r',15)
					.attr('fill','#cccccc')
					.attr('stroke','#000000')
					.attr('stroke-width',2)
		const drag = d3.drag()
					.on('start', function(){
						d3.select(this)
							.attr('fill','#ccc897')
					})
					.on('drag', function(){
						let pt = d3.pointer(event, this)
						d3.select(this)
							.attr('cx',pt[0])
							.attr('cy',pt[1])
					})
					.on('end', function(){
						d3.select(this)
							.attr('fill','#cccccc')
					})
		dots.call(drag)

		const foreceData = [{name:'A'},{name:'B'},{name:'C'},{name:'D'},{name:'E'},{name:'F'},{name:'G'}]
		const forceDots =  d3.select('.forceElement')
                    .append('g')
                    .selectAll('circle')
                    .data(foreceData)
                    .enter()
                    .append('circle')
                    .attr('cx', 250)
                    .attr('cy', 150)
                    .attr('r', 15)
                    .style('fill', 'green')
                    .style('opacity', 0.4)
		const simulation = d3.forceSimulation()
							.alphaDecay(0)
							.velocityDecay(0.2) // 設定摩擦係數(預設0.4)
							.force('x', d3.forceX())
							.force('y', d3.forceY())
							.force('center', d3.forceCenter().x(250).y(250))
							.force('charge', d3.forceManyBody().strength(1))  // 設定節點間電荷力
							.force('collide', d3.forceCollide().strength(0.1).radius(40).iterations(0.2))  // 設定節點間彼此的互斥力
		simulation.nodes(foreceData)
			.on('tick', function(d){
				forceDots.attr("cx", d=>d.x)
							.attr("cy", d=>d.y)
			})

		
		const forceGroupData = [
			{ "name": "A", "group": 150 },
			{ "name": "B", "group": 150 },
			{ "name": "C", "group": 150 },
			{ "name": "D", "group": 150 },
			{ "name": "E", "group": 150 },
			{ "name": "F", "group": 150 },
			{ "name": "G", "group": 250 },
			{ "name": "H", "group": 250 },
			{ "name": "I", "group": 250 },
			{ "name": "J", "group": 250 },
			{ "name": "K", "group": 250 },
			{ "name": "L", "group": 350 },
			{ "name": "M", "group": 350 },
			{ "name": "N", "group": 350 },
			{ "name": "O", "group": 350 }
		]

		const forceGroupColorScale = d3.scaleOrdinal()
										.domain([150,250,350])
										.range(['red','blue','orange'])
		const forceGroupNode = d3.select('.forceGroup')
						.append('g')
						.selectAll("circle")
						.data(forceGroupData)
						.join('circle')
						.attr('r', 20)
						.attr('cx', 250)
						.attr('cy', 150)
						.style('fill', d=>colorScale(d.group))
						.style('opacity', '0.6')
		const forceGroupSimulation = d3.forceSimulation()
										.force('x', d3.forceX().strength(0.5).x(d=>d.group))
										.force('y', d3.forceY().strength(0.1).y(150))
										.force('center', d3.forceCenter().x(250).y(150))
										.force('charge', d3.forceManyBody().strength(1))
										.force('collide', d3.forceCollide().strength(0.1).radius(20).iterations(1))
		forceGroupSimulation.nodes(forceGroupData)
			.on('tick', function(){
				forceGroupNode
					.attr('cx',d=>d.x)
					.attr('cy',d=>d.y)
			})

		const forceLinkData = {
			"nodes": [
				{"id": 1, "name": "A"},
				{"id": 2, "name": "B"},
				{"id": 3, "name": "C"},
				{"id": 4, "name": "D"},
				{"id": 5, "name": "E"},
				{"id": 6, "name": "F"},
				{"id": 7, "name": "G"},
				{"id": 8, "name": "H"},
				{"id": 9, "name": "I"},
				{"id": 10, "name": "J"}
						],
			"links": [
				{"source": 1, "target": 2},
				{"source": 1, "target": 3},
				{"source": 1, "target": 6},
				{"source": 2, "target": 3},
				{"source": 2,"target": 7},
				{"source": 3,"target": 4},
				{"source": 8,"target": 3},
				{"source": 4,"target": 5},
				{"source": 4,"target": 9},
				{"source": 5,"target": 10}
			]
		}

		const forceLinkDots =  d3.select('.forceLink')
                    .append('g')
                    .selectAll('circle')
                    .data(forceLinkData.nodes)
                    .enter()
                    .append('circle')
                    .attr('r', 15)
                    .style('fill', 'green')
                    .style('opacity', 0.4)

		const forceLinkLink = d3.select('.forceLink')
						.selectAll("line")
						.data(forceLinkData.links)
						.join("line")
						.style("stroke", "#aaa")

		// 設定力模擬器
		const forceLinkSimulation = d3.forceSimulation(forceLinkData.nodes)
		.force('link', d3.forceLink().id(d=>d.id).links(forceLinkData.links))
		.force("charge", d3.forceManyBody().strength(-300))
		.force("center", d3.forceCenter(250, 150))
		.on('tick', forceLinkTicked)
					

		// 設定 ticked 方法
		function forceLinkTicked(d){
			forceLinkLink
				.attr("x1", function(d) { return d.source.x; })
				.attr("y1", function(d) { return d.source.y; })
				.attr("x2", function(d) { return d.target.x; })
				.attr("y2", function(d) { return d.target.y; });

			forceLinkDots.attr("cx", d=> d.x)
				.attr("cy", d => d.y);
		}

		const forceDragData = [{name:'A'},{name:'B'},{name:'C'},{name:'D'},{name:'E'},{name:'F'},{name:'G'}]
		// 建立原點，目前全部都在同個位置
		const forceDragDots = d3.select('.forceDrag')
        .append('g')
        .selectAll('circle')
        .data(forceDragData)
        .join('circle')
        .attr('r', 25)
        .attr('cx', 50)
        .attr('cy', 50)
        .style("fill", "#19d3a2")
        .style("fill-opacity", 0.3)
        .attr("stroke", "#b3a2c8")
        .style("stroke-width", 4)
        .style('cursor', 'pointer')

		const forceDragSimulation = d3.forceSimulation()
			.force("center", d3.forceCenter().x(200).y(150))
			.force("charge", d3.forceManyBody().strength(1))
			.force("collide", d3.forceCollide().strength(.1).radius(30).iterations(1));
		forceDragSimulation.nodes(forceDragData)
			.on("tick", function(d){
				forceDragDots.attr("cx", d => d.x)
						.attr("cy", d => d.y)
				});

		function dragstarted(event, d){
			forceDragSimulation.alphaTarget(0.8).restart()
			d3.select(this)
				.style('fill-opacity',0.5)
			d.fx = d.x; //节点的固定，设置后节点会移动到对应位置。
			d.fy = d.y;
			// alphaTarget對節點位置移動過程的模擬，數值越高移動越快，數值範圍[0，1]。
			// restart 控制模擬器重新執行
		}

		function dragged(event, d){
			d.fx = event.x;
			d.fy = event.y;
		}

		function dragended(event, d){
			forceDragSimulation.alphaTarget(0).restart()
			d3.select(this)
				.style('fill-opacity',0.3)
			d.fx = null;
			d.fy = null;
		}

		const forceDragEvent = d3.drag() 
								.on("start", dragstarted)
								.on("drag", dragged)
								.on("end", dragended)
		forceDragDots.call(forceDragEvent)


		const dragLinksData = {
			"nodes": [
				{"id": 1, "name": "A"},
				{"id": 2, "name": "B"},
				{"id": 3, "name": "C"},
				{"id": 4, "name": "D"},
				{"id": 5, "name": "E"},
				{"id": 6, "name": "F"},
				{"id": 7, "name": "G"},
				{"id": 8, "name": "H"},
				{"id": 9, "name": "I"},
				{"id": 10, "name": "J"}
						],
			"links": [
				{"source": 1, "target": 2},
				{"source": 1, "target": 3},
				{"source": 1, "target": 6},
				{"source": 2, "target": 3},
				{"source": 2,"target": 7},
				{"source": 3,"target": 4},
				{"source": 8,"target": 3},
				{"source": 4,"target": 5},
				{"source": 4,"target": 9},
				{"source": 5,"target": 10}
			]
		}

		const dragLinksDots =  
			d3.select('.forceDragLink')
				.append('g')
				.selectAll('circle')
				.data(dragLinksData.nodes)
				.join('circle')
				.attr('r', 15)
				.style('fill', 'green')
				.style('opacity', 0.6)
				.style('cursor', 'pointer')

		const dragLinksLink = 
			d3.select('.forceDragLink')
				.selectAll("line")
				.data(dragLinksData.links)
				.join("line")
				.style("stroke", "#aaa")

		const dragLinksSimulation = 
			d3.forceSimulation(dragLinksData.nodes)
				.force('link', d3.forceLink().id(d=>d.id).links(dragLinksData.links))
				.force('charge',d3.forceManyBody().strength(-300))
				.force('center',d3.forceCenter(250,200))
				.on('tick', ticked)
		function ticked(d){
			dragLinksLink.attr('x1', (d)=>d.source.x)
				.attr('y1', (d)=>d.source.y)
				.attr('x2', (d)=>d.target.x)
				.attr('y2', (d)=>d.target.y)

			dragLinksDots.attr("cx", d=> d.x)
				.attr("cy", d => d.y);


		}
		const dragLinksEvent = d3.drag()
			.on("start", dragstarted)
			.on("drag", dragged)
			.on("end", dragended)

		function dragstarted(event, d){
			d3.select(this)
				.style('fill', 'pink')
			d.fx = d.x;
			d.fy = d.y;
			dragLinksSimulation.alphaTarget(.03).restart(); // 停止後需要重新開始
		}
		
		function dragged(event, d){
			d.fx = event.x;
			d.fy = event.y;
		}
		
		function dragended(event, d){
			d3.select(this)
				.style('fill', 'green')
				.style('opacity', 0.6)
			d.fx = null
			d.fy = null
			dragLinksSimulation.alphaTarget(0).restart();
		}

		dragLinksDots.call(dragLinksEvent)
}

	async function getData(){
		const dataGet = await d3.json('../data/hsinchuWater.json')
		console.log(dataGet)
	}





	{
		$(document).ready(function () {
			init();
		});
	}

	//public
	return {

	};
};

var main = new main();

// Slider
// var Swiper = new Swiper('#swiper-container名稱', {
// 	// loop: true,
// 	slidesPerView : 1,
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
		
// 	},
// 	breakpoints: { 
// 		768: {
// 			slidesPerView : 3,
// 			slidesPerGroup : 3,
// 		},
// 	}
// })


