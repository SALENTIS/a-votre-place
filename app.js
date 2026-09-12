
document.querySelectorAll('[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{
 e.preventDefault(); const m=f.querySelector('.formmsg'); if(m){m.className='notice formmsg';m.textContent='Demande enregistrée. Cette V1 est une démonstration : le paiement et les comptes seront branchés dans l’étape suivante.';}
}));
