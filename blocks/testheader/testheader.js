export default function decorate(block) {
 
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
          picWrapper.classList.add('testheader-div-image');
      
        }
      }
      const headTextH2 = col.querySelector('h2');
      const headTextParagraph = col.querySelector('p');

      if(headTextH2){
          headTextH2.classList.add('testheader-h2');
      }

      if(headTextParagraph){
        headTextParagraph.classList.add('testheader-p');
    }


    });
  });


}
