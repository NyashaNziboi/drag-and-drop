const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//Loop through empties and call drag events
for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

//Drag Functions (' hold' space on append is necessary)
function dragStart() {
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
	this.className = 'fill';
	console.log('End');
}

function dragOver(e) {
	e.preventDefault();
	console.log('Over');
}
function dragEnter(e) {
	e.preventDefault();
	this.className += ' hovered';
	console.log('enter');
}
function dragLeave() {
	this.className = 'empty';
	console.log('Leave');
}
function dragDrop() {
	this.className = 'empty';
	this.append(fill);
	console.log('Drop');
}
