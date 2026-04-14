import type { Language } from "@/context/LanguageContextProvider";

const translations: Record<Language, Record<string, string>> = {
  en: {
    // ── Navbar ──────────────────────────────────────────────
    "nav.logo": "Logo",
    "nav.signUp": "Sign up",
    "nav.logIn": "Log in",
    "nav.userFallback": "User",

    // ── Hero ────────────────────────────────────────────────
    "hero.title":
      "Search routes, view availability, and book shared trips effortlessly.",

    // ── Trip Booking ────────────────────────────────────────
    "booking.whereFrom": "Where from?",
    "booking.whereTo": "Where to?",
    "booking.departureDate": "Departure date",
    "booking.search": "Search",
    "booking.searching": "Searching...",

    // ── Warning Section ─────────────────────────────────────
    "warning.title":
      "Travel together, save money, and reach your destination with ease.",
    "warning.description":
      "Secure bookings, transparent pricing, and a seamless experience.",

    // ── Available Trips ─────────────────────────────────────
    "trips.available": "Available trips",
    "trips.available.kg": "Available:",
    "trips.noResults": "No destination Card Found",
    "trips.loading": "Loading available trips...",
    "trips.error": "Failed to load trips. Please try again.",

    // ── Trip Details ────────────────────────────────────────
    "tripDetails.backToHome": "Back to Home",
    "tripDetails.date": "Date",
    "tripDetails.kgAvailable": "Kg Available",
    "tripDetails.additionalOptions": "Additional Options",
    "tripDetails.pickupService": "Pickup Service",
    "tripDetails.enterWeight": "Enter Weight (kg)",
    "tripDetails.priceBreakdown": "Price Breakdown",
    "tripDetails.basePrice": "Base Price",
    "tripDetails.serviceFee": "Service Fee",
    "tripDetails.petsAllowed": "Pets Allowed",
    "tripDetails.total": "Total",
    "tripDetails.yourInfo": "Your Information",
    "tripDetails.fullName": "Full Name",
    "tripDetails.fullNamePlaceholder": "Enter your Full Name",
    "tripDetails.email": "Email",
    "tripDetails.emailPlaceholder": "Enter your Email Address",
    "tripDetails.phone": "Phone",
    "tripDetails.phonePlaceholder": "Enter your Phone Number",
    "tripDetails.address": "Address",
    "tripDetails.addressPlaceholder": "Enter your Full Address",
    "tripDetails.pickupAddress": "Pickup Address",
    "tripDetails.pickupAddressPlaceholder": "Enter your Pickup Address",
    "tripDetails.useSameAddress": "Use same address",
    "tripDetails.proceedToPayment": "Proceed to Payment",

    // ── Login Dialog ────────────────────────────────────────
    "login.title": "Log in",
    "login.subtitle": "Welcome back - Enter to explore.",
    "login.emailPlaceholder": "Email address",
    "login.passwordPlaceholder": "Password",
    "login.rememberMe": "Remember Me",
    "login.forgotPassword": "Forgot Password?",
    "login.submitting": "Logging in...",
    "login.submit": "Log in",
    "login.noAccount": "Don't have an account?",
    "login.signUpLink": "Sign Up",

    // ── Register Dialog ─────────────────────────────────────
    "register.title": "Sign up",
    "register.subtitle": "Create an account to access all features and tools.",
    "register.fullNamePlaceholder": "Full Name",
    "register.emailPlaceholder": "Email address",
    "register.passwordPlaceholder": "Password",
    "register.confirmPasswordPlaceholder": "Confirm Password",
    "register.agreeAll": "I Agree all",
    "register.termsAndCondition": "Term & Condition",
    "register.submitting": "Signing up...",
    "register.submit": "Sign up",
    "register.hasAccount": "Already have an account?",
    "register.signInLink": "Sign in",

    // ── Forgot Password Dialog ──────────────────────────────
    "forgot.title": "Forgot Password",
    "forgot.subtitle":
      "Please enter the email address associated with your account, and we'll send you a link to reset your password.",
    "forgot.emailPlaceholder": "Email address",
    "forgot.back": "Back",
    "forgot.submitting": "Sending...",
    "forgot.submit": "Submit",

    // ── Verify OTP (shared) ─────────────────────────────────
    "verify.title": "Email Verify",
    "verify.subtitle.before": "We've sent a code to",
    "verify.subtitle.after": ". Please enter the code below to continue.",
    "verify.resendIn": "Resend code in",
    "verify.didntReceive": "Didn't receive a code?",
    "verify.resending": "Sending...",
    "verify.resend": "Resend",
    "verify.back": "Back",
    "verify.submitting": "Verifying...",
    "verify.submit": "Submit",

    // ── Registration Complete ───────────────────────────────
    "regComplete.title": "Congratulation",
    "regComplete.subtitle": "You have Created Your Account Successfully",
    "regComplete.backToLogin": "Back to Log in",

    // ── Reset Password Dialog ───────────────────────────────
    "resetPassword.title": "Set a New Password",
    "resetPassword.subtitle":
      "Please enter the new password and confirm it below to reset password",
    "resetPassword.passwordPlaceholder": "Password",
    "resetPassword.confirmPlaceholder": "Confirm Password",
    "resetPassword.back": "Back",
    "resetPassword.submitting": "Resetting...",
    "resetPassword.submit": "Submit",

    // ── Reset Password Complete ─────────────────────────────
    "resetComplete.title": "Congratulation",
    "resetComplete.subtitle": "You have Successfully Change your Password",
    "resetComplete.backToLogin": "Back to Log in",

    // ── Logout Dialog ───────────────────────────────────────
    "logout.title": "Log Out",
    "logout.description": "Are you want to sure",
    "logout.back": "Back",
    "logout.submitting": "Signing out...",
    "logout.submit": "Log Out",

    // ── Propose Trip Dialog ─────────────────────────────────
    "propose.title": "Propose a Trip",
    "propose.subtitle": "Create an Propose to Going Your Trip",
    "propose.trip": "Trip",
    "propose.departurePlaceholder": "Departure City",
    "propose.weightPlaceholder": "Available Weight (kg)",
    "propose.datePlaceholder": "Date",
    "propose.timePlaceholder": "Time",
    "propose.arrivalPlaceholder": "Arrival City",
    "propose.add": "Add",
    "propose.availableDates": "Available Multiple Dates",
    "propose.addDate": "Add Date",
    "propose.noDates": 'No dates added yet. Click "Add Date" to select.',
    "propose.back": "Back",
    "propose.submitting": "Submitting...",
    "propose.submit": "Submit",

    // ── Dashboard ───────────────────────────────────────────
    "dashboard.title": "My Dashboard",
    "dashboard.subtitle": "Manage your bookings and trip offerings",
    "dashboard.myBookings": "My Bookings",
    "dashboard.myTripOffers": "My Trip Offers",
    "dashboard.proposeNewTrip": "Propose New Trip",
    "dashboard.trips.loading": "Loading your trip offers...",
    "dashboard.trips.error": "Failed to load trip offers. Please try again.",
    "dashboard.bookings.loading": "Loading your bookings...",
    "dashboard.bookings.error": "Failed to load bookings. Please try again.",
    "dashboard.overview.totalWeight": "Total Weight",
    "dashboard.overview.availableWeight": "Available Weight",
    "dashboard.overview.activeTrips": "Active Trips",
    "dashboard.overview.totalRevenue": "Total Revenue",

    // ── Settings ────────────────────────────────────────────
    "settings.title": "Settings",
    "settings.profile": "Profile",
    "settings.changePassword": "Change Password",
    "settings.logout": "Log out",

    // ── Change Password Section ─────────────────────────────
    "changePassword.title": "Change Password",
    "changePassword.currentLabel": "Current Password",
    "changePassword.currentPlaceholder": "Enter current password",
    "changePassword.newLabel": "New Password",
    "changePassword.newPlaceholder": "Enter new password",
    "changePassword.confirmLabel": "Confirm New Password",
    "changePassword.confirmPlaceholder": "Confirm new password",
    "changePassword.submitting": "Updating...",
    "changePassword.submit": "Update Password",

    // ── Edit Profile Section ────────────────────────────────
    "editProfile.changePhoto": "Change",
    "editProfile.fullName": "Full Name",
    "editProfile.email": "Email",
    "editProfile.phone": "Phone",
    "editProfile.address": "Address",
    "editProfile.cancel": "Cancel",
    "editProfile.submitting": "Updating...",
    "editProfile.submit": "Update",

    // ── Profile Section ─────────────────────────────────────
    "profile.edit": "Edit",
    "profile.fullName": "Full Name",
    "profile.email": "Email",
    "profile.phone": "Phone",
    "profile.address": "Address",

    // ── Contact Page ────────────────────────────────────────
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Have a question, feedback, or need help with a booking? Send us a message and our team will get back to you shortly.",
    "contact.info.title": "Get in touch",
    "contact.info.subtitle":
      "Reach us directly through the details below, or use the form to send your message.",
    "contact.info.email": "Contact email",
    "contact.info.phone": "Phone number",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Enter your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "Enter your email address",
    "contact.form.phone": "Phone",
    "contact.form.phonePlaceholder": "Enter your phone number",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Write your message",
    "contact.form.submit": "Send message",

    // ── Request Quote Page ──────────────────────────────────
    "requestQuote.title": "Request a Quote",
    "requestQuote.subtitle":
      "Share your shipment details and we will provide a custom quote based on route, item type, and volume.",
    "requestQuote.side.badge": "Fast quote support",
    "requestQuote.side.title": "Tell us what you want to ship",
    "requestQuote.side.description":
      "Complete the form and include photos if needed. Our team will review your request and contact you.",
    "requestQuote.side.point1": "Accurate route and item details help us estimate faster.",
    "requestQuote.side.point2": "Upload photos for better handling and pricing guidance.",
    "requestQuote.side.point3": "You will receive a response from our team shortly.",
    "requestQuote.form.title": "Quote request form",
    "requestQuote.form.name": "Name",
    "requestQuote.form.namePlaceholder": "Enter your full name",
    "requestQuote.form.phone": "Phone",
    "requestQuote.form.phonePlaceholder": "Enter your phone number",
    "requestQuote.form.departureCity": "Departure city",
    "requestQuote.form.departureCityPlaceholder": "Enter departure city",
    "requestQuote.form.destinationCity": "Destination city",
    "requestQuote.form.destinationCityPlaceholder": "Enter destination city",
    "requestQuote.form.itemDescription": "Item description",
    "requestQuote.form.itemDescriptionPlaceholder": "e.g., bike, scooter, suitcase",
    "requestQuote.form.photos": "Upload photos (optional)",
    "requestQuote.form.photosCta": "Click to select photos",
    "requestQuote.form.photosHint": "Accepted: JPG, PNG, WEBP",
    "requestQuote.form.selectedPhotos": "Selected photos",
    "requestQuote.form.morePhotos": "more photo(s)",
    "requestQuote.form.clearPhotos": "Clear all",
    "requestQuote.form.removePhoto": "Remove",
    "requestQuote.form.message": "Message",
    "requestQuote.form.messagePlaceholder": "Add details about your request",
    "requestQuote.form.submit": "Submit quote request",

    // ── Footer ──────────────────────────────────────────────
    "footer.ctaTitle": "Need a custom shipping quote?",
    "footer.ctaSubtitle": "Share your trip and item details, then get a tailored offer from our team.",
    "footer.requestQuoteCta": "Request a Quote",
    "footer.brandDescription":
      "A smarter way to move items between cities with trusted travelers and transparent pricing.",
    "footer.quickLinks": "Quick links",
    "footer.email": "Email",
    "footer.phone": "Phone number",
    "footer.contactLink": "Contact page",
    "footer.contactCta": "Contact Us",
    "footer.requestQuoteLink": "Request a Quote",
    "footer.copyright": "@2025 all right deserves",
  },

  fr: {
    // ── Navbar ──────────────────────────────────────────────
    "nav.logo": "Logo",
    "nav.signUp": "S'inscrire",
    "nav.logIn": "Se connecter",
    "nav.userFallback": "Utilisateur",

    // ── Hero ────────────────────────────────────────────────
    "hero.title":
      "Recherchez des itinéraires, consultez les disponibilités et réservez facilement des voyages partagés.",

    // ── Trip Booking ────────────────────────────────────────
    "booking.whereFrom": "D'où ?",
    "booking.whereTo": "Où ?",
    "booking.departureDate": "Date de départ",
    "booking.search": "Rechercher",
    "booking.searching": "Recherche...",

    // ── Warning Section ─────────────────────────────────────
    "warning.title":
      "Voyagez ensemble, économisez de l'argent et atteignez votre destination facilement.",
    "warning.description":
      "Réservations sécurisées, tarification transparente et expérience fluide.",

    // ── Available Trips ─────────────────────────────────────
    "trips.available": "Voyages disponibles",
    "trips.available.kg": "Disponible :",
    "trips.noResults": "Aucune carte de destination trouvée",
    "trips.loading": "Chargement des voyages disponibles...",
    "trips.error": "Échec du chargement des voyages. Veuillez réessayer.",

    // ── Trip Details ────────────────────────────────────────
    "tripDetails.backToHome": "Retour à l'accueil",
    "tripDetails.date": "Date",
    "tripDetails.kgAvailable": "Kg disponible",
    "tripDetails.additionalOptions": "Options supplémentaires",
    "tripDetails.pickupService": "Service de ramassage",
    "tripDetails.enterWeight": "Entrez le poids (kg)",
    "tripDetails.priceBreakdown": "Détail du prix",
    "tripDetails.basePrice": "Prix de base",
    "tripDetails.serviceFee": "Frais de service",
    "tripDetails.petsAllowed": "Animaux autorisés",
    "tripDetails.total": "Total",
    "tripDetails.yourInfo": "Vos informations",
    "tripDetails.fullName": "Nom complet",
    "tripDetails.fullNamePlaceholder": "Entrez votre nom complet",
    "tripDetails.email": "E-mail",
    "tripDetails.emailPlaceholder": "Entrez votre adresse e-mail",
    "tripDetails.phone": "Téléphone",
    "tripDetails.phonePlaceholder": "Entrez votre numéro de téléphone",
    "tripDetails.address": "Adresse",
    "tripDetails.addressPlaceholder": "Entrez votre adresse complète",
    "tripDetails.pickupAddress": "Adresse de ramassage",
    "tripDetails.pickupAddressPlaceholder": "Entrez votre adresse de ramassage",
    "tripDetails.useSameAddress": "Utiliser la même adresse",
    "tripDetails.proceedToPayment": "Procéder au paiement",

    // ── Login Dialog ────────────────────────────────────────
    "login.title": "Se connecter",
    "login.subtitle": "Bon retour - Entrez pour explorer.",
    "login.emailPlaceholder": "Adresse e-mail",
    "login.passwordPlaceholder": "Mot de passe",
    "login.rememberMe": "Se souvenir de moi",
    "login.forgotPassword": "Mot de passe oublié ?",
    "login.submitting": "Connexion en cours...",
    "login.submit": "Se connecter",
    "login.noAccount": "Vous n'avez pas de compte ?",
    "login.signUpLink": "S'inscrire",

    // ── Register Dialog ─────────────────────────────────────
    "register.title": "S'inscrire",
    "register.subtitle":
      "Créez un compte pour accéder à toutes les fonctionnalités et outils.",
    "register.fullNamePlaceholder": "Nom complet",
    "register.emailPlaceholder": "Adresse e-mail",
    "register.passwordPlaceholder": "Mot de passe",
    "register.confirmPasswordPlaceholder": "Confirmer le mot de passe",
    "register.agreeAll": "J'accepte tous les",
    "register.termsAndCondition": "Termes et conditions",
    "register.submitting": "Inscription en cours...",
    "register.submit": "S'inscrire",
    "register.hasAccount": "Vous avez déjà un compte ?",
    "register.signInLink": "Se connecter",

    // ── Forgot Password Dialog ──────────────────────────────
    "forgot.title": "Mot de passe oublié",
    "forgot.subtitle":
      "Veuillez entrer l'adresse e-mail associée à votre compte, et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
    "forgot.emailPlaceholder": "Adresse e-mail",
    "forgot.back": "Retour",
    "forgot.submitting": "Envoi en cours...",
    "forgot.submit": "Soumettre",

    // ── Verify OTP (shared) ─────────────────────────────────
    "verify.title": "Vérification de l'e-mail",
    "verify.subtitle.before": "Nous avons envoyé un code à",
    "verify.subtitle.after":
      ". Veuillez entrer le code ci-dessous pour continuer.",
    "verify.resendIn": "Renvoyer le code dans",
    "verify.didntReceive": "Vous n'avez pas reçu de code ?",
    "verify.resending": "Envoi en cours...",
    "verify.resend": "Renvoyer",
    "verify.back": "Retour",
    "verify.submitting": "Vérification en cours...",
    "verify.submit": "Soumettre",

    // ── Registration Complete ───────────────────────────────
    "regComplete.title": "Félicitations",
    "regComplete.subtitle": "Vous avez créé votre compte avec succès",
    "regComplete.backToLogin": "Retour à la connexion",

    // ── Reset Password Dialog ───────────────────────────────
    "resetPassword.title": "Définir un nouveau mot de passe",
    "resetPassword.subtitle":
      "Veuillez entrer le nouveau mot de passe et le confirmer ci-dessous pour réinitialiser le mot de passe",
    "resetPassword.passwordPlaceholder": "Mot de passe",
    "resetPassword.confirmPlaceholder": "Confirmer le mot de passe",
    "resetPassword.back": "Retour",
    "resetPassword.submitting": "Réinitialisation en cours...",
    "resetPassword.submit": "Soumettre",

    // ── Reset Password Complete ─────────────────────────────
    "resetComplete.title": "Félicitations",
    "resetComplete.subtitle":
      "Vous avez modifié votre mot de passe avec succès",
    "resetComplete.backToLogin": "Retour à la connexion",

    // ── Logout Dialog ───────────────────────────────────────
    "logout.title": "Déconnexion",
    "logout.description": "Êtes-vous sûr de vouloir vous déconnecter ?",
    "logout.back": "Retour",
    "logout.submitting": "Déconnexion en cours...",
    "logout.submit": "Se déconnecter",

    // ── Propose Trip Dialog ─────────────────────────────────
    "propose.title": "Proposer un voyage",
    "propose.subtitle": "Créez une proposition pour votre voyage",
    "propose.trip": "Voyage",
    "propose.departurePlaceholder": "Ville de départ",
    "propose.weightPlaceholder": "Poids disponible (kg)",
    "propose.datePlaceholder": "Date",
    "propose.timePlaceholder": "Heure",
    "propose.arrivalPlaceholder": "Ville d'arrivée",
    "propose.add": "Ajouter",
    "propose.availableDates": "Dates multiples disponibles",
    "propose.addDate": "Ajouter une date",
    "propose.noDates":
      "Aucune date ajoutée. Cliquez sur « Ajouter une date » pour sélectionner.",
    "propose.back": "Retour",
    "propose.submitting": "Envoi en cours...",
    "propose.submit": "Soumettre",

    // ── Dashboard ───────────────────────────────────────────
    "dashboard.title": "Mon tableau de bord",
    "dashboard.subtitle": "Gérez vos réservations et offres de voyage",
    "dashboard.myBookings": "Mes réservations",
    "dashboard.myTripOffers": "Mes offres de voyage",
    "dashboard.proposeNewTrip": "Proposer un nouveau voyage",
    "dashboard.trips.loading": "Chargement de vos offres de voyage...",
    "dashboard.trips.error": "Échec du chargement des offres. Veuillez réessayer.",
    "dashboard.bookings.loading": "Chargement de vos réservations...",
    "dashboard.bookings.error": "Échec du chargement des réservations. Veuillez réessayer.",
    "dashboard.overview.totalWeight": "Poids total",
    "dashboard.overview.availableWeight": "Poids disponible",
    "dashboard.overview.activeTrips": "Voyages actifs",
    "dashboard.overview.totalRevenue": "Revenu total",

    // ── Settings ────────────────────────────────────────────
    "settings.title": "Paramètres",
    "settings.profile": "Profil",
    "settings.changePassword": "Changer le mot de passe",
    "settings.logout": "Se déconnecter",

    // ── Change Password Section ─────────────────────────────
    "changePassword.title": "Changer le mot de passe",
    "changePassword.currentLabel": "Mot de passe actuel",
    "changePassword.currentPlaceholder": "Entrez le mot de passe actuel",
    "changePassword.newLabel": "Nouveau mot de passe",
    "changePassword.newPlaceholder": "Entrez le nouveau mot de passe",
    "changePassword.confirmLabel": "Confirmer le nouveau mot de passe",
    "changePassword.confirmPlaceholder": "Confirmez le nouveau mot de passe",
    "changePassword.submitting": "Mise à jour...",
    "changePassword.submit": "Mettre à jour le mot de passe",

    // ── Edit Profile Section ────────────────────────────────
    "editProfile.changePhoto": "Changer",
    "editProfile.fullName": "Nom complet",
    "editProfile.email": "E-mail",
    "editProfile.phone": "Téléphone",
    "editProfile.address": "Adresse",
    "editProfile.cancel": "Annuler",
    "editProfile.submitting": "Mise à jour...",
    "editProfile.submit": "Mettre à jour",

    // ── Profile Section ─────────────────────────────────────
    "profile.edit": "Modifier",
    "profile.fullName": "Nom complet",
    "profile.email": "E-mail",
    "profile.phone": "Téléphone",
    "profile.address": "Adresse",

    // ── Contact Page ────────────────────────────────────────
    "contact.title": "Contactez-nous",
    "contact.subtitle":
      "Une question, un retour, ou besoin d'aide pour une réservation ? Envoyez-nous un message et notre équipe vous répondra rapidement.",
    "contact.info.title": "Restons en contact",
    "contact.info.subtitle":
      "Vous pouvez nous joindre directement via les coordonnées ci-dessous, ou utiliser le formulaire pour envoyer votre message.",
    "contact.info.email": "E-mail de contact",
    "contact.info.phone": "Numéro de téléphone",
    "contact.form.title": "Envoyez-nous un message",
    "contact.form.name": "Nom",
    "contact.form.namePlaceholder": "Entrez votre nom",
    "contact.form.email": "E-mail",
    "contact.form.emailPlaceholder": "Entrez votre adresse e-mail",
    "contact.form.phone": "Téléphone",
    "contact.form.phonePlaceholder": "Entrez votre numéro de téléphone",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Écrivez votre message",
    "contact.form.submit": "Envoyer le message",

    // ── Request Quote Page ──────────────────────────────────
    "requestQuote.title": "Demander un devis",
    "requestQuote.subtitle":
      "Partagez les détails de votre envoi et nous vous fournirons un devis personnalisé selon l'itinéraire, le type d'article et le volume.",
    "requestQuote.side.badge": "Support de devis rapide",
    "requestQuote.side.title": "Dites-nous ce que vous souhaitez expédier",
    "requestQuote.side.description":
      "Remplissez le formulaire et ajoutez des photos si nécessaire. Notre équipe examinera votre demande et vous contactera.",
    "requestQuote.side.point1": "Des détails précis sur l'itinéraire et l'article accélèrent l'estimation.",
    "requestQuote.side.point2": "Ajoutez des photos pour un meilleur traitement et une meilleure estimation du prix.",
    "requestQuote.side.point3": "Vous recevrez une réponse de notre équipe rapidement.",
    "requestQuote.form.title": "Formulaire de demande de devis",
    "requestQuote.form.name": "Nom",
    "requestQuote.form.namePlaceholder": "Entrez votre nom complet",
    "requestQuote.form.phone": "Téléphone",
    "requestQuote.form.phonePlaceholder": "Entrez votre numéro de téléphone",
    "requestQuote.form.departureCity": "Ville de départ",
    "requestQuote.form.departureCityPlaceholder": "Entrez la ville de départ",
    "requestQuote.form.destinationCity": "Ville de destination",
    "requestQuote.form.destinationCityPlaceholder": "Entrez la ville de destination",
    "requestQuote.form.itemDescription": "Description de l'article",
    "requestQuote.form.itemDescriptionPlaceholder": "ex. vélo, trottinette, valise",
    "requestQuote.form.photos": "Ajouter des photos (optionnel)",
    "requestQuote.form.photosCta": "Cliquez pour sélectionner des photos",
    "requestQuote.form.photosHint": "Formats acceptés : JPG, PNG, WEBP",
    "requestQuote.form.selectedPhotos": "Photos sélectionnées",
    "requestQuote.form.morePhotos": "photo(s) supplémentaire(s)",
    "requestQuote.form.clearPhotos": "Tout effacer",
    "requestQuote.form.removePhoto": "Supprimer",
    "requestQuote.form.message": "Message",
    "requestQuote.form.messagePlaceholder": "Ajoutez des détails supplémentaires sur votre demande",
    "requestQuote.form.submit": "Envoyer la demande de devis",

    // ── Footer ──────────────────────────────────────────────
    "footer.ctaTitle": "Besoin d'un devis d'expédition personnalisé ?",
    "footer.ctaSubtitle":
      "Partagez les détails de votre trajet et de votre article pour recevoir une offre adaptée.",
    "footer.requestQuoteCta": "Demander un devis",
    "footer.brandDescription":
      "Une solution plus intelligente pour transporter des articles entre les villes avec des voyageurs de confiance et des tarifs transparents.",
    "footer.quickLinks": "Liens rapides",
    "footer.email": "E-mail",
    "footer.phone": "Numéro de téléphone",
    "footer.contactLink": "Page de contact",
    "footer.contactCta": "Aller à Contactez-nous",
    "footer.requestQuoteLink": "Aller à Demander un devis",
    "footer.copyright": "@2025 tous droits réservés",
  },
};

export default translations;
