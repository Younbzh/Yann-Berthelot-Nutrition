/*
  Mentions légales, CGV et politique de confidentialité de Yann, écrites dans
  public/. Les informations encore inconnues s'affichent « à compléter » :
  il suffit de remplir l'objet ci-dessous et de relancer
  `node scripts/pages-legales.mjs`.

  SIREN et forme juridique viennent de l'annuaire des entreprises
  (recherche-entreprises.api.gouv.fr), consulté le 16 novembre 2026.
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const infos = {
  nom: 'Yann Berthelot',
  activite: 'Conseiller en neuro-nutrition',
  forme: 'Entrepreneur individuel',
  siren: '104 891 270',
  adresse: '', // rue ; la commune est connue
  commune: '22600 Loudéac',
  telephone: '06 63 00 41 27',
  email: '',
  tva: '', // ex. « TVA non applicable, article 293 B du code général des impôts »
  paiement: '', // ex. « chaque mois, par virement, au début de chaque mois d'accompagnement »
  apresEngagement: '', // ce qui se passe après les 3 mois, et le préavis pour arrêter
  mediateur: '', // nom, adresse et site du médiateur de la consommation
};

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MANQUE = '<span class="manque">à compléter</span>';
const ou = (v) => (String(v ?? '').trim() ? String(v).trim() : MANQUE);
const adresse = infos.adresse ? `${infos.adresse}, ${infos.commune}` : `${MANQUE}, ${infos.commune}`;

const STYLE = `  :root{--fond:#FAF5EC;--surface:#FFF;--encre:#1C3424;--doux:#4F5A53;--ligne:#E8E0D4;--or:#C4813A}
  *{box-sizing:border-box}
  body{margin:0;background:var(--fond);color:var(--encre);font:16px/1.65 Inter,system-ui,-apple-system,sans-serif;padding:3rem 1.25rem 4rem}
  main{max-width:44rem;margin:0 auto}
  a{color:inherit}
  h1{font-family:'Playfair Display',Georgia,serif;font-size:clamp(1.9rem,5vw,2.5rem);line-height:1.15;margin:0 0 1.75rem}
  h2{font-size:1.1rem;margin:2.5rem 0 .7rem}
  p,li{color:var(--doux);margin:0 0 .8rem}
  strong{color:var(--encre)}
  dl{display:grid;grid-template-columns:auto 1fr;gap:.45rem 1.5rem;margin:0 0 1rem;
     background:var(--surface);border:1px solid var(--ligne);border-radius:12px;padding:1.4rem}
  dt{font-weight:700;font-size:.9rem}
  dd{margin:0;color:var(--doux);font-size:.95rem}
  .manque{color:var(--or);font-style:italic}
  .encadre{background:var(--surface);border:1px solid var(--ligne);border-radius:12px;padding:1.4rem;margin:1rem 0}
  @media(max-width:33rem){dl{grid-template-columns:1fr;gap:.1rem}dd{margin-bottom:.7rem}}
  footer{margin-top:3.5rem;padding-top:1.5rem;border-top:1px solid var(--ligne);font-size:.9rem;color:var(--doux)}
  .retour{display:inline-block;margin-bottom:2.25rem;font-size:.9rem}`;

const page = (titre, corps, liens) => `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${titre} · ${infos.nom}</title>
<style>
${STYLE}
</style>
</head>
<body>
<main>
  <a class="retour" href="/">← Retour au site</a>
  <h1>${titre}</h1>
${corps}
  <footer>
    <a href="/">Retour au site</a> · ${liens}
  </footer>
</main>
</body>
</html>
`;

const LIEN_MENTIONS = '<a href="/mentions-legales.html">Mentions légales</a>';
const LIEN_CGV = '<a href="/cgv.html">Conditions générales de vente</a>';
const LIEN_CONF = '<a href="/confidentialite.html">Politique de confidentialité</a>';

const mentions = page('Mentions légales', `
  <h2>Éditeur du site</h2>
  <dl>
    <dt>Nom</dt><dd>${infos.nom}, ${infos.activite.toLowerCase()}</dd>
    <dt>Forme juridique</dt><dd>${infos.forme}</dd>
    <dt>SIREN</dt><dd>${infos.siren}</dd>
    <dt>Adresse</dt><dd>${adresse}</dd>
    <dt>Téléphone</dt><dd>${infos.telephone}</dd>
    <dt>Courriel</dt><dd>${ou(infos.email)}</dd>
    <dt>Directeur de la publication</dt><dd>${infos.nom}</dd>
  </dl>

  <h2>Hébergement</h2>
  <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>

  <h2>Conception du site</h2>
  <p>Avalon Stratège, Loudéac (22), <a href="https://www.avalon-stratege.com" rel="noopener">www.avalon-stratege.com</a></p>

  <h2>Nature de l'activité</h2>
  <p>${infos.nom} est conseiller en neuro-nutrition. Il n'est ni médecin ni diététicien, et ses
  conseils ne remplacent pas un avis, un diagnostic ou un traitement médical.</p>

  <h2>Médiation de la consommation</h2>
  <p>Conformément à l'article L. 612-1 du code de la consommation, tout client peut recourir
  gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige.</p>
  <dl><dt>Médiateur</dt><dd>${ou(infos.mediateur)}</dd></dl>

  <h2>Propriété intellectuelle</h2>
  <p>Les textes, photographies et la structure de ce site sont protégés. Toute reproduction sans
  autorisation est interdite.</p>`, `${LIEN_CGV} · ${LIEN_CONF}`);

const cgv = page('Conditions générales de vente', `
  <p>Les présentes conditions s'appliquent aux prestations d'accompagnement proposées par
  ${infos.nom}, ${infos.forme.toLowerCase()} (SIREN ${infos.siren}), ${adresse}, joignable au
  ${infos.telephone}${infos.email ? ` et à ${infos.email}` : ''}, à toute personne agissant à titre
  privé (ci-après « le client »). Elles sont remises au client avant tout engagement.</p>

  <h2>1. Les prestations</h2>
  <p><strong>L'appel découverte</strong> est gratuit et sans engagement. Il permet de faire le
  point sur la situation du client et de vérifier ensemble que l'accompagnement lui convient.</p>
  <p><strong>L'accompagnement</strong> comprend :</p>
  <ul>
    <li>un appel en visioconférence de 15 à 20 minutes chaque semaine ;</li>
    <li>un suivi par WhatsApp chaque jour, avec une réponse dans la journée ;</li>
    <li>des conseils sur mesure, construits autour de la situation du client, avec pour but son autonomie.</li>
  </ul>

  <h2>2. Nature des conseils</h2>
  <p>${infos.nom} est conseiller en neuro-nutrition. Il n'est ni médecin ni diététicien.
  L'accompagnement porte sur l'hygiène de vie : alimentation, respiration, gestion des émotions,
  sommeil, relaxation. Il ne constitue ni un diagnostic, ni une prescription, ni un traitement, et
  ne remplace pas un suivi médical. Le client ne modifie ni n'interrompt aucun traitement sans
  l'avis de son médecin, et l'informe de toute pathologie ou traitement en cours.</p>
  <p>${infos.nom} s'engage à mettre en œuvre tous les moyens à sa disposition pour accompagner le
  client ; il ne peut garantir un résultat, qui dépend aussi de l'implication de chacun.</p>

  <h2>3. Prix</h2>
  <p>L'accompagnement coûte <strong>150 € par mois</strong>, soit 5 € par jour. Avec l'engagement
  minimum de trois mois, le montant total minimum est donc de <strong>450 €</strong>.</p>
  <p>${infos.tva ? infos.tva + '.' : `Mention de TVA : ${MANQUE}.`}</p>

  <h2>4. Paiement</h2>
  <p>Modalités et calendrier de paiement : ${ou(infos.paiement)}.</p>

  <h2>5. Durée et engagement</h2>
  <p>L'accompagnement est conclu pour une durée minimum de <strong>trois mois</strong>, à compter
  de sa date de début convenue avec le client.</p>
  <p>À l'issue des trois mois : ${ou(infos.apresEngagement)}.</p>

  <h2>6. Droit de rétractation</h2>
  <p>Le contrat étant conclu à distance, le client dispose d'un délai de <strong>quatorze
  jours</strong> à compter de sa conclusion pour se rétracter, sans avoir à se justifier ni à payer
  de pénalité (articles L. 221-18 et suivants du code de la consommation).</p>
  <p>Pour l'exercer, il suffit d'en informer ${infos.nom} par une déclaration dénuée d'ambiguïté :
  message écrit (WhatsApp, courriel ou courrier), ou le formulaire ci-dessous. Les sommes versées
  sont remboursées dans les quatorze jours suivant la rétractation, par le même moyen de paiement.</p>
  <p>Si le client demande expressément que l'accompagnement commence avant la fin de ce délai, il
  conserve son droit de rétractation, mais il paie la part de l'accompagnement déjà fournie
  jusqu'à sa rétractation, au prorata (article L. 221-25).</p>

  <div class="encadre">
    <p><strong>Formulaire de rétractation</strong> (à renvoyer uniquement si vous souhaitez vous rétracter)</p>
    <p>À l'attention de ${infos.nom}, ${adresse}${infos.email ? `, ${infos.email}` : ''} :</p>
    <p>Je vous notifie par la présente ma rétractation du contrat portant sur la prestation de
    services ci-dessous :<br>
    Accompagnement commandé le : …………<br>
    Nom du client : …………<br>
    Adresse du client : …………<br>
    Date et signature (en cas d'envoi papier) : …………</p>
  </div>

  <h2>7. Données personnelles</h2>
  <p>Les informations confiées pendant l'accompagnement, y compris celles qui touchent à la santé,
  sont traitées comme le décrit la <a href="/confidentialite.html">politique de confidentialité</a>.</p>

  <h2>8. Réclamations et médiation</h2>
  <p>Toute réclamation peut être adressée à ${infos.nom} par téléphone, WhatsApp ou par écrit.
  À défaut de solution amiable, le client peut recourir gratuitement au médiateur de la
  consommation suivant (article L. 612-1 du code de la consommation) : ${ou(infos.mediateur)}.</p>

  <h2>9. Droit applicable</h2>
  <p>Les présentes conditions sont soumises au droit français. En cas de litige, le client peut
  saisir, à son choix, la juridiction du lieu où il demeurait au moment de la conclusion du contrat
  ou celle du lieu de la survenance du fait dommageable.</p>`, `${LIEN_MENTIONS} · ${LIEN_CONF}`);

const confidentialite = page('Politique de confidentialité', `
  <h2>Qui traite vos données</h2>
  <p>Le responsable de traitement est ${infos.nom}, ${adresse}. Pour toute question :
  ${infos.telephone}${infos.email ? ` ou ${infos.email}` : ''}.</p>

  <h2>Sur ce site</h2>
  <p>Ce site ne comporte aucun formulaire, ne dépose aucun cookie et n'utilise aucun outil de
  mesure d'audience ni de publicité : aucun consentement ne vous est demandé, parce qu'il n'y a
  rien à consentir. Les polices de caractères sont chargées depuis les serveurs de Google
  (Google Fonts), qui reçoivent à cette occasion l'adresse IP de votre appareil. L'hébergeur,
  Vercel, conserve des journaux techniques de connexion pour la sécurité du service.</p>

  <h2>Quand vous me contactez</h2>
  <p>Si vous m'appelez ou m'écrivez sur WhatsApp, je conserve votre nom, votre numéro et nos
  échanges, uniquement pour vous répondre et, si vous le souhaitez, vous accompagner. Les messages
  WhatsApp transitent par les serveurs de WhatsApp (Meta), selon ses propres conditions.</p>

  <h2>Pendant l'accompagnement</h2>
  <p>Pour vous conseiller, j'ai besoin d'informations sur votre alimentation, votre sommeil, votre
  état de forme et, parfois, votre santé. Ces données de santé sont sensibles : elles ne sont
  recueillies qu'avec votre accord explicite, servent uniquement à votre accompagnement et ne sont
  partagées avec personne.</p>
  <p>Elles sont conservées le temps de l'accompagnement, puis supprimées au plus tard trois ans
  après notre dernier échange. Les factures sont conservées dix ans, comme l'exige la loi.</p>

  <h2>Qui y a accès</h2>
  <p>${infos.nom}, et personne d'autre. Aucune donnée n'est vendue, échangée ni transmise à des
  fins commerciales.</p>

  <h2>Vos droits</h2>
  <p>Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et
  d'opposition sur les données vous concernant, et vous pouvez retirer à tout moment votre accord
  au traitement de vos données de santé. Il suffit de me le demander par téléphone, WhatsApp ou
  par écrit ; la réponse intervient dans le mois.</p>
  <p>En cas de désaccord persistant, vous pouvez saisir la Commission nationale de l'informatique
  et des libertés : <a href="https://www.cnil.fr" rel="noopener">www.cnil.fr</a>, 3 place de
  Fontenoy, TSA 80715, 75334 Paris Cedex 07.</p>`, `${LIEN_MENTIONS} · ${LIEN_CGV}`);

for (const [fichier, html] of [
  ['mentions-legales.html', mentions],
  ['cgv.html', cgv],
  ['confidentialite.html', confidentialite],
]) {
  fs.writeFileSync(path.join(racine, 'public', fichier), html);
  console.log(`public/${fichier}`);
}
