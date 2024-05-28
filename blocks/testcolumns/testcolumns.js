export default function decorate(block) {

  const cols = [...block.firstElementChild.children];
  block.classList.add('inner-content');


  [...block.children].forEach((row) => {

    const divchild = row.querySelector('div');
    const divmain = divchild.parentElement;
    divmain.classList.add('first-col');

      [...row.children].forEach((col) => {
       
          const ul = col.querySelector('ul');
          var newFieldSet = document.createElement('fieldset');
          var legend = document.createElement('legend');
          const paragraph = col.querySelector('p');

          if(paragraph){
            newFieldSet.appendChild(legend);
            legend.innerHTML =  paragraph.textContent;
            newFieldSet.appendChild(legend);
            paragraph.remove();
          }

          if (ul) {
              const ulWrapper = ul.closest('div');
              if (ulWrapper) {
                     ulWrapper.appendChild(newFieldSet);
                      [...ul.children].forEach((child) => {
                          newFieldSet.appendChild(child);
             });
            }
          }

      });
  });


}   