 function igualarAlturasAbas() {
        const grupo = document.getElementById('grupo-cards-fantasma');
        const impacto = document.getElementById('impacto-anual');
        if (grupo && impacto) {
          const hGrupo = grupo.offsetHeight;
          const hImpacto = impacto.offsetHeight;
          const maior = Math.max(hGrupo, hImpacto);
          grupo.style.height = maior + 'px';
          impacto.style.height = maior + 'px';
        }
      }
      window.addEventListener('load', igualarAlturasAbas);
      window.addEventListener('resize', igualarAlturasAbas);