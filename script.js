const colorNames = [
  'beige', 'black', 'brown', 'cyan', 'gray', 'green', 'lightgreen', 'orange', 'pink', 'red', 'skyblue', 'violet', 'white', 'yellow'
];

const colorCss = {
  beige: '#f5f5dc',
  black: '#222',
  brown: '#a0522d',
  cyan: '#00bcd4',
  gray: '#888',
  green: '#4caf50',
  lightgreen: '#8bc34a',
  orange: '#ff9800',
  pink: '#e91e63',
  red: '#f44336',
  skyblue: '#4fc3f7',
  violet: '#8e24aa',
  white: '#fff',
  yellow: '#ffeb3b'
};

const colorPalette = document.getElementById('colorPalette');
const mainProductImg = document.getElementById('mainProductImg');
let selectedColor = 'skyblue';

// Create two rows
const row1 = document.createElement('div');
row1.className = 'color-palette-row';
const row2 = document.createElement('div');
row2.className = 'color-palette-row';

colorNames.forEach((color, idx) => {
  const swatch = document.createElement('div');
  swatch.className = 'color-swatch' + (color === selectedColor ? ' selected' : '');
  swatch.style.background = colorCss[color] || '#fff';
  swatch.title = color.charAt(0).toUpperCase() + color.slice(1);

  swatch.addEventListener('mouseenter', () => {
    mainProductImg.src = `pics/colors/${color}.png`;
    mainProductImg.alt = color + ' Angelami';
  });
  swatch.addEventListener('mouseleave', () => {
    mainProductImg.src = `pics/colors/${selectedColor}.png`;
    mainProductImg.alt = selectedColor + ' Angelami';
  });
  swatch.addEventListener('click', () => {
    document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
    swatch.classList.add('selected');
    selectedColor = color;
    mainProductImg.src = `pics/colors/${color}.png`;
    mainProductImg.alt = color + ' Angelami';
  });

  if (idx < 7) {
    row1.appendChild(swatch);
  } else {
    row2.appendChild(swatch);
  }
});

colorPalette.appendChild(row1);
colorPalette.appendChild(row2);

// Add the subtext under the palette
const subtext = document.createElement('div');
subtext.className = 'palette-subtext';
subtext.textContent = 'Or specify your preferred color in your order';
colorPalette.appendChild(subtext);

// Add the design button under the subtext
const designBtn = document.createElement('a');
designBtn.href = 'design/index.html';
designBtn.className = 'cta';
designBtn.style.display = 'inline-block';
designBtn.style.marginTop = '1.5rem';
designBtn.textContent = 'Design your Anglegami now!';
colorPalette.appendChild(designBtn); 