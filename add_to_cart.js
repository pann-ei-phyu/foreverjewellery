$(document).ready(function () {
	getProduct();
	function getProduct() {
		let loStr = localStorage.getItem('jewellys');
		if(loStr){
			let proArr = JSON.parse(loStr);
			let xml='';
			let yml='';
			let subtotal = 0;
			let total = 0;
			$.each(proArr,function (i,v) {
				let name = v.name;
				let price = v.price;
				let qty   = v.qty;
				let img   = v.img;
				let id    = v.id;
				subtotal = price*qty;
				//alert(subtotal);
				//let subtotal = v.subtotal*parseInt(qty);
				xml +=`<tr>
							<td><img src="${img}"></td>
							<td><h5>${name}</h5><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
							 	sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
								consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
								cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
								proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								<p class="float-right d-inline mx-3"><b>Price:</b>${subtotal}</p>
								<p class="float-right d-inline"><b>Quntity:</b><input min="1" class="ml-3 changebtn" data-price="${price}" 
								data-id="${i}" type="number" name="qty" value="${qty}"></p><br><br>
								<button class="btn btn-success float-right deletebtn">REMOVE</button>
							</td>	
						</tr>`
				yml +=`<tr>
							<td>${name}</td>
							<td>$${price}</td>
							<td>${qty}</td>
							<td>${subtotal}</td>
						</tr>`
				total += subtotal;
			})
			$('#total1').html("$"+total);
			$('#total2').html("$"+total);
			$('#show_detail').html(xml);
			$('#checkout_table').html(yml);
			$('#promocode').show(2000);
			$('#checkTable').show(2000);
			$('#clear').show(2000);
			$('#detail').show(3000);
		}else{
			$('#promocode').hide(2000);
			$('#checkTable').hide(2000);
			$('#clear').hide(2000);
			$('#detail').hide(3000);
		}
	}
	let jewelly;
	$('.uptoget').click(function () {
		//alert("0k");
		let name  = $(this).data('name');
		let id    = $(this).data('id');
		let price = $(this).data('price');
		let qty   = $(this).data('qty');
		let img   = $(this).data('img');
		let subt  = parseInt(price);
		//subtotal = parseInt(qty)*subt;
		//alert(subtotal);
		//alert(subtotal);
		jewelly = {
			name:name,
			id:id,
			price:price,
			qty:qty,
			img:img
		};
		let loStr = localStorage.getItem('jewellys');
		let proArr;
		if (loStr==null) {
			proArr = Array();
		}else{
			proArr = JSON.parse(loStr);
			let status =false;
			$.each(proArr,function (i,v) {
			let loId = v.id;
			if (loId == id){
				status =true;
				v.qty+=1;
				}
			})
			if(status==false){
				proArr.push(jewelly);
			}
		}
		localStorage.setItem('jewellys',JSON.stringify(proArr));
		getProduct();
		console.log(jewelly);
	});
	function del_func() {
		let del = confirm("U want to remove this product?");
		let loStr = localStorage.getItem('jewellys');
		proArr = JSON.parse(loStr);
				//console.log(proArr);
			if(del){
				let id = $(this).data('id');
				proArr.splice(id,1);
				localStorage.setItem('jewellys',JSON.stringify(proArr));
			}				
	getProduct();
	}
$('#show_detail').on('click','.deletebtn',function() {
		del_func();
		})
$('#show_detail').on('change','.changebtn',function() {
	let qty = $(this).val();
	//alert(qty);
	let id = $(this).data('id');
	//alert(id);
	let price=$(this).data('price');
	//alert(price);
	let subtotal = qty*price;
	//alert(subtotal);
	let loStr = localStorage.getItem('jewellys');
	if(loStr){
		let proArr = JSON.parse(loStr);
		proArr[id].qty = qty;
		proArr[id].subtotal = subtotal;
		localStorage.setItem('jewellys',JSON.stringify(proArr));
	}
	getProduct();

})
$('#clear').click(function() {
	localStorage.clear();
	getProduct();
})
$('#other').addClass('hide');
let country;
$('#country2').change(function () {
    country = $(this).val();
	if(country==5){
		$('#other').removeClass('hide');
	}else{$('#other').addClass('hide');}
})
})