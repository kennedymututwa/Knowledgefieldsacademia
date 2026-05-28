<!DOCTYPE html>

<html lang="en" class="scroll-smooth">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Knowledge Fields Academy | Strive for Excellence</title>

<!-- Tailwind CSS CDN -->

<script src="https://cdn.tailwindcss.com"></script>

<!-- FontAwesome Icons -->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts -->

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<style>

body {

font-family: 'Plus Jakarta Sans', sans-serif;

}

</style>

</head>

<body class="min-h-screen flex flex-col font-sans text-gray-900 bg-white selection:bg-yellow-200 selection:text-blue-950">



<!-- HEADER / NAVBAR -->

<header id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-6">

<div class="container mx-auto px-4 flex justify-between items-center">


<!-- Authentic Logo -->

<div class="flex items-center space-x-3 cursor-pointer group" onclick="navigateTo('home')">

<div class="w-14 h-14 bg-white rounded-full flex items-center justify-center p-0.5 border-2 border-yellow-500 shadow-lg overflow-hidden">

<img src="https://i.postimg.cc/Mpp3h442/Lite-(1).png" alt="Knowledge Fields Academy Logo" class="w-full h-full object-contain p-1">

</div>

<div class="flex flex-col">

<span class="text-xl md:text-2xl font-black leading-none text-white tracking-wide uppercase">Knowledge Fields</span>

<span class="text-xs font-bold tracking-widest text-yellow-400 uppercase mt-1">Academy</span>

</div>

</div>



<!-- Desktop Nav -->

<nav class="hidden lg:flex items-center space-x-2">

<button onclick="navigateTo('home')" class="nav-link px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider bg-yellow-500 text-blue-950">Home</button>

<button onclick="navigateTo('about')" class="nav-link px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider text-white hover:text-yellow-400">About Us</button>

<button onclick="navigateTo('academics')" class="nav-link px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider text-white hover:text-yellow-400">Academics & Tuitions</button>

<button onclick="navigateTo('admissions')" class="nav-link px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider text-white hover:text-yellow-400">Admissions</button>

<button onclick="navigateTo('gallery')" class="nav-link px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider text-white hover:text-yellow-400">Gallery</button>

<button onclick="navigateTo('contact')" class="nav-link px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider text-white hover:text-yellow-400">Contact</button>

</nav>



<!-- Desktop Action -->

<div class="hidden lg:block">

<button onclick="navigateTo('admissions')" class="bg-yellow-500 text-blue-950 hover:bg-yellow-400 font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300">Enroll Now</button>

</div>



<!-- Mobile Menu Toggle -->

<button class="lg:hidden p-2 rounded-lg text-white text-3xl focus:outline-none" onclick="toggleMobileMenu()">

<i id="menu-icon" class="fa-solid fa-bars"></i>

</button>

</div>

</header>



<!-- MOBILE MENU -->

<div id="mobile-menu" class="fixed inset-0 z-40 bg-blue-950 pt-28 px-6 pb-6 overflow-y-auto hidden">

<div class="flex flex-col space-y-2">

<button onclick="navigateTo('home')" class="mobile-nav-link text-left text-xl font-bold py-4 border-b border-blue-900 uppercase tracking-wider text-yellow-500">Home</button>

<button onclick="navigateTo('about')" class="mobile-nav-link text-left text-xl font-bold py-4 border-b border-blue-900 uppercase tracking-wider text-white">About Us</button>

<button onclick="navigateTo('academics')" class="mobile-nav-link text-left text-xl font-bold py-4 border-b border-blue-900 uppercase tracking-wider text-white">Academics & Tuitions</button>

<button onclick="navigateTo('admissions')" class="mobile-nav-link text-left text-xl font-bold py-4 border-b border-blue-900 uppercase tracking-wider text-white">Admissions</button>

<button onclick="navigateTo('gallery')" class="mobile-nav-link text-left text-xl font-bold py-4 border-b border-blue-900 uppercase tracking-wider text-white">Gallery</button>

<button onclick="navigateTo('contact')" class="mobile-nav-link text-left text-xl font-bold py-4 border-b border-blue-900 uppercase tracking-wider text-white">Contact</button>

<div class="pt-8 flex flex-col gap-4">

<button onclick="navigateTo('admissions')" class="w-full py-4 bg-yellow-500 text-blue-950 font-bold rounded-full text-center">Enroll Now</button>

<button onclick="navigateTo('contact')" class="w-full py-4 border border-white text-white font-bold rounded-full text-center">Contact Us</button>

</div>

</div>

</div>



<!-- MAIN APP PAGES CONTAINER -->

<main class="flex-grow pt-0">



<!-- ========================================== -->

<!-- HOME PAGE -->

<!-- ========================================== -->

<div id="page-home" class="page-view flex flex-col">

<!-- Hero -->

<section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-950">

<div class="absolute inset-0 z-0">

<img src="https://i.postimg.cc/tgrPZvCG/file-00000000655c722f878a4d1a064af438.png" alt="Knowledge Fields Academy Students" class="w-full h-full object-cover opacity-40 object-center">

<div class="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-transparent"></div>

</div>

<div class="container mx-auto px-4 z-10 relative">

<div class="max-w-3xl">

<div class="flex flex-wrap items-center gap-2 mb-6">

<span class="inline-block py-1.5 px-4 rounded-full bg-yellow-500/20 text-yellow-400 font-bold text-sm border border-yellow-500/50 backdrop-blur-sm uppercase tracking-wide">2025 Admissions Open</span>

<span class="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-400 font-bold text-sm border border-green-500/50 backdrop-blur-sm uppercase tracking-wide">Enrollment in Progress</span>

</div>

<h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 uppercase">Knowledge Fields <br><span class="text-yellow-400">Academy</span></h1>

<h2 class="text-2xl md:text-3xl font-bold text-blue-200 mb-8 italic">"Strive for Excellence"</h2>

<p class="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">Offering premium Nursery and Primary School Education alongside specialized Evening Tuitions for Grades 7, 9, 12 & GCE Candidates.</p>

<div class="flex flex-col sm:flex-row gap-4">

<button onclick="navigateTo('admissions')" class="bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 text-lg flex items-center justify-center">Apply Online <i class="fa-solid fa-arrow-right ml-2"></i></button>

<button onclick="navigateTo('academics')" class="bg-white hover:bg-gray-50 text-blue-950 font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 text-lg">View Tuition Programs</button>

</div>

</div>

</div>

</section>



<!-- Quick Strip -->

<section class="bg-yellow-500 py-6 relative z-20 shadow-lg">

<div class="container mx-auto px-4">

<div class="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-950 font-bold text-center md:text-left">

<div class="flex items-center justify-center"><i class="fa-regular fa-clock text-xl mr-3"></i> School Open: 07:00 to 19:00 Monday to Friday</div>

<div class="flex items-center justify-center"><i class="fa-solid fa-map-pin text-xl mr-3"></i> Along Kuku Road, Opposite Chawama Main SDA Church, Lusaka</div>

<div class="flex items-center justify-center"><i class="fa-solid fa-phone text-xl mr-3"></i> +260 974-674960</div>

</div>

</div>

</section>



<!-- Benefits -->

<section class="py-24 bg-gray-50">

<div class="container mx-auto px-4">

<div class="mb-12 text-center">

<span class="text-yellow-500 font-extrabold tracking-wider uppercase text-sm mb-2 block">Our Benefits</span>

<h2 class="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight uppercase">Why Choose Knowledge Fields?</h2>

<div class="w-24 h-1 bg-yellow-500 mt-4 mx-auto"></div>

</div>

<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

<div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-yellow-500">

<div class="w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl flex items-center justify-center mb-6"><i class="fa-solid fa-handshake-angle text-2xl"></i></div>

<h3 class="text-xl font-extrabold text-blue-950 mb-3 uppercase">Personalized Teaching</h3>

<p class="text-gray-600 leading-relaxed">Individual attention to ensure every child reaches their full potential.</p>

</div>

<div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-yellow-500">

<div class="w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl flex items-center justify-center mb-6"><i class="fa-solid fa-school text-2xl"></i></div>

<h3 class="text-xl font-extrabold text-blue-950 mb-3 uppercase">Spacious Classrooms</h3>

<p class="text-gray-600 leading-relaxed">Modern, airy, and conducive learning environments for all grades.</p>

</div>

<div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-yellow-500">

<div class="w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl flex items-center justify-center mb-6"><i class="fa-solid fa-laptop-code text-2xl"></i></div>

<h3 class="text-xl font-extrabold text-blue-950 mb-3 uppercase">Computer Lessons</h3>

<p class="text-gray-600 leading-relaxed">Equipping students with essential digital skills for the modern world.</p>

</div>

<div class="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-yellow-500">

<div class="w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl flex items-center justify-center mb-6"><i class="fa-solid fa-shield-halved text-2xl"></i></div>

<h3 class="text-xl font-extrabold text-blue-950 mb-3 uppercase">Affordable Fees</h3>

<p class="text-gray-600 leading-relaxed">Premium quality education structured to be accessible to our community.</p>

</div>

</div>

</div>

</section>



<!-- Programs Preview -->

<section class="py-24 bg-white">

<div class="container mx-auto px-4">

<div class="flex flex-col lg:flex-row gap-16 items-center">

<div class="lg:w-1/2">

<div class="mb-8 text-left">

<span class="text-yellow-500 font-extrabold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>

<h2 class="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight uppercase">Comprehensive Education Paths</h2>

<div class="w-24 h-1 bg-yellow-500 mt-4"></div>

</div>

<div class="space-y-8 mt-8">

<div class="flex items-start bg-blue-50 p-6 rounded-2xl border border-blue-100">

<div class="bg-blue-900 p-3 rounded-lg text-white mr-6 mt-1"><i class="fa-regular fa-sun text-2xl"></i></div>

<div>

<h4 class="text-2xl font-bold text-blue-950 mb-2">Day School</h4>

<p class="text-gray-600 mb-2">Nursery & Primary School Education starting from Baby Class up to Grade 7.</p>

<span class="text-sm font-bold text-blue-900 bg-white px-3 py-1 rounded-full shadow-sm border border-blue-100">07:00 - 16:00 HRS</span>

</div>

</div>

<div class="flex items-start bg-yellow-50 p-6 rounded-2xl border border-yellow-100">

<div class="bg-yellow-500 p-3 rounded-lg text-blue-950 mr-6 mt-1"><i class="fa-regular fa-moon text-2xl"></i></div>

<div>

<h4 class="text-2xl font-bold text-blue-950 mb-2">Evening Tuitions</h4>

<p class="text-gray-600 mb-2">Rigorous, focused evening tuitions explicitly structured for senior examination preparation.</p>

<span class="text-sm font-bold text-yellow-800 bg-white px-3 py-1 rounded-full shadow-sm border border-yellow-200">17:00 - 19:00 HRS (Mon-Fri)</span>

</div>

</div>

</div>

<button onclick="navigateTo('academics')" class="mt-10 bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300">Explore All Programs</button>

</div>

<div class="lg:w-1/2 grid grid-cols-2 gap-4">

<img src="https://i.postimg.cc/SQGXJtTS/file-00000000efe0722f8677f455b10ca4dc.png" alt="Happy children at Knowledge Fields" class="w-full h-64 object-cover rounded-3xl rounded-tr-none shadow-lg bg-gray-100">

<img src="https://i.postimg.cc/pVc8X6cB/file-000000005198720aa2660219bd777744.png" alt="Knowledge Fields Academy Signboard" class="w-full h-64 object-cover rounded-3xl rounded-tl-none shadow-lg mt-8 bg-blue-900">

</div>

</div>

</div>

</section>

</div>



<!-- ========================================== -->

<!-- ABOUT US PAGE -->

<!-- ========================================== -->

<div id="page-about" class="page-view pt-32 pb-24 bg-gray-50 min-h-screen hidden">

<div class="container mx-auto px-4 max-w-4xl">

<div class="mb-12 text-center">

<span class="text-yellow-500 font-extrabold tracking-wider uppercase text-sm mb-2 block">Discover</span>

<h2 class="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight uppercase">About Us</h2>

<div class="w-24 h-1 bg-yellow-500 mt-4 mx-auto"></div>

</div>

<div class="bg-white p-10 rounded-3xl shadow-lg text-gray-700 leading-loose border-t-8 border-yellow-500 text-lg">

<p class="mb-6 font-bold text-xl text-blue-950">Welcome to Knowledge Fields Academy.</p>

<p class="mb-6">We are a dedicated educational institution operating strategically in Lusaka along Kuku Road. Our collective institutional baseline remains defined clearly by our motto: <strong>"Strive for Excellence"</strong>.</p>

<p class="mb-6">From Baby Class foundational care paths to standard primary grading steps, running through our structured Evening Tuitions for senior levels, we aim to harmonize supportive settings with functional instructional discipline.</p>

<div class="mt-10 p-6 bg-blue-50 border-l-4 border-yellow-500 rounded-r-xl">

<h3 class="text-xl font-bold text-blue-950 mb-2 uppercase">Our Commitment</h3>

<p>To cultivate academic curiosity and character depth in a safe, modern, and engaging operational space.</p>

</div>

</div>

</div>

</div>



<!-- ========================================== -->

<!-- ACADEMICS PAGE -->

<!-- ========================================== -->

<div id="page-academics" class="page-view pt-32 pb-24 bg-gray-50 min-h-screen hidden">

<div class="container mx-auto px-4">

<div class="mb-12 text-center">

<span class="text-yellow-500 font-extrabold tracking-wider uppercase text-sm mb-2 block">Our Curriculum</span>

<h2 class="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight uppercase">Academics & Tuitions</h2>

<div class="w-24 h-1 bg-yellow-500 mt-4 mx-auto"></div>

</div>


<div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-12">

<!-- Day School Card -->

<div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col justify-between">

<div>

<div class="h-72 overflow-hidden relative">

<img src="https://i.postimg.cc/SQGXJtTS/file-00000000efe0722f8677f455b10ca4dc.png" alt="Classroom environment" class="w-full h-full object-cover object-top">

<div class="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center p-4 text-center">

<h3 class="text-4xl font-extrabold text-white uppercase tracking-wider mb-2">Nursery & Primary</h3>

<span class="bg-yellow-500 text-blue-950 font-bold px-4 py-1 rounded-full text-sm">Baby Class to Grade 7</span>

</div>

</div>

<div class="p-8">

<p class="text-gray-600 mb-6 text-lg">Our day school setup provides a vibrant framework for early foundation and primary learning. We pair personalized attention with digital literacy modules.</p>

<ul class="space-y-4 mb-4">

<li class="flex items-center text-blue-950 font-medium"><i class="fa-solid fa-check text-yellow-500 mr-3"></i> Baby Class, Nursery & Pre-School</li>

<li class="flex items-center text-blue-950 font-medium"><i class="fa-solid fa-check text-yellow-500 mr-3"></i> Interactive Computer Lessons</li>

<li class="flex items-center text-blue-950 font-medium"><i class="fa-solid fa-check text-yellow-500 mr-3"></i> Spacious & Well-Ventilated Classrooms</li>

<li class="flex items-center text-blue-950 font-medium"><i class="fa-solid fa-check text-yellow-500 mr-3"></i> Qualified & Attentive Educators</li>

</ul>

</div>

</div>

<div class="p-8 pt-0">

<button onclick="navigateTo('admissions')" class="w-full py-4 bg-blue-900 text-white font-bold rounded-full">Apply for Day School</button>

</div>

</div>



<!-- Evening Tuitions Card -->

<div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col justify-between">

<div>

<div class="h-72 overflow-hidden relative bg-blue-950 flex flex-col items-center justify-center">

<img src="https://i.postimg.cc/QCKMM0Vf/file-00000000d318720abac0753f64768be3.png" alt="Official Evening Tuitions Program Flyer" class="w-full h-full object-contain p-2">

</div>

<div class="p-8">

<div class="inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-1 rounded-full text-sm mb-4">17:00 - 19:00 HRS (Mon - Fri)</div>

<p class="text-gray-600 mb-6 text-lg">We host focused, high-impact evening revision sessions specifically calibrated to help students clear national standard milestones smoothly.</p>

<ul class="space-y-4 mb-4">

<li class="flex items-center text-blue-950 font-medium"><i class="fa-solid fa-check text-yellow-500 mr-3"></i> Grade 7 Examination Prep</li>

<li class="flex items-center text-blue-950 font-medium"><i class="fa-solid fa-check text-yellow-500 mr-3"></i> Grade 9 Examination Prep</li>

<li class="flex items-center text-blue-950 font-medium"><i class="fa-solid fa-check text-yellow-500 mr-3"></i> Grade 12 Strategic Tuitions</li>

<li class="flex items-center text-blue-950 font-medium"><i class="fa-solid fa-check text-yellow-500 mr-3"></i> Comprehensive GCE Candidate Syllabus</li>

</ul>

</div>

</div>

<div class="p-8 pt-0">

<button onclick="navigateTo('contact')" class="w-full py-4 bg-yellow-500 text-blue-950 font-bold rounded-full">Inquire About Tuitions</button>

</div>

</div>

</div>

</div>

</div>



<!-- ========================================== -->

<!-- ADMISSIONS PAGE -->

<!-- ========================================== -->

<div id="page-admissions" class="page-view pt-32 pb-24 bg-gray-50 min-h-screen hidden">

<div class="container mx-auto px-4 max-w-6xl">

<div class="mb-12 text-center">

<span class="text-yellow-500 font-extrabold tracking-wider uppercase text-sm mb-2 block">Join Us</span>

<h2 class="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight uppercase">School Admission Registration</h2>

<div class="w-24 h-1 bg-yellow-500 mt-4 mx-auto"></div>

</div>


<div class="flex flex-col lg:flex-row gap-12">

<!-- Visual Side -->

<div class="lg:w-1/3">

<div class="sticky top-32">

<img src="https://i.postimg.cc/gjcBmTJ6/Screenshot-20260506-090255-Lite.jpg" alt="2025 Admissions Flyer" class="w-full rounded-3xl shadow-xl border-4 border-white object-contain bg-black">

<div class="bg-blue-900 text-white p-8 rounded-3xl shadow-xl mt-6">

<h3 class="text-xl font-bold mb-4 uppercase text-yellow-400">Need Help?</h3>

<p class="mb-4">Our admissions team is available to guide you through the process.</p>

<a href="tel:+260974674960" class="flex items-center font-bold text-lg hover:text-yellow-400 transition-colors">

<i class="fa-solid fa-phone mr-3"></i> +260 974-674960

</a>

</div>

</div>

</div>



<!-- Form Side -->

<div class="lg:w-2/3">

<div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-yellow-500">

<div class="text-center mb-10">

<h2 class="text-2xl font-bold text-blue-950 uppercase mb-2">Enroll Your Child</h2>

<p class="text-gray-600">Please complete the form details below to initialize the registration process.</p>

</div>



<div id="admission-success-msg" class="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200 hidden">

<i class="fa-regular fa-circle-check text-5xl text-green-500 mb-4"></i>

<h3 class="text-2xl font-bold mb-2">Application Form Received!</h3>

<p class="text-lg">Thank you. Our admissions office team will contact you shortly.</p>

<button onclick="resetAdmissionForm()" class="mt-8 bg-blue-900 text-white px-8 py-3 rounded-full font-bold">Submit Another Form</button>

</div>



<form id="admission-form" onsubmit="handleAdmissionSubmit(event)" class="space-y-6">

<div class="grid md:grid-cols-2 gap-6">

<div>

<label class="block text-sm font-bold text-blue-950 mb-2">Parent/Guardian Full Name *</label>

<input required type="text" id="parentName" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50">

</div>

<div>

<label class="block text-sm font-bold text-blue-950 mb-2">Student's Full Name *</label>

<input required type="text" id="childName" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50">

</div>

</div>



<div class="grid md:grid-cols-2 gap-6">

<div>

<label class="block text-sm font-bold text-blue-950 mb-2">Primary Phone Number *</label>

<input required type="tel" id="parentPhone" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50" placeholder="e.g. +260 974...">

</div>

<div>

<label class="block text-sm font-bold text-blue-950 mb-2">Email Address</label>

<input type="email" id="parentEmail" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50">

</div>

</div>



<div>

<label class="block text-sm font-bold text-blue-950 mb-2">Target Program/Grade *</label>

<select required id="targetProgram" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50">

<option value="">Select an alternative...</option>

<optgroup label="Day School System">

<option value="Baby Class">Baby Class</option>

<option value="Nursery">Nursery</option>

<option value="Primary School">Primary School (Grades 1 - 7)</option>

</optgroup>

<optgroup label="Evening Revision Tuitions">

<option value="Tuition - Grade 7">Grade 7 Tuition</option>

<option value="Tuition - Grade 9">Grade 9 Tuition</option>

<option value="Tuition - Grade 12">Grade 12 Tuition</option>

<option value="Tuition - GCE">GCE Candidate Module</option>

</optgroup>

</select>

</div>



<button type="submit" class="w-full py-4 bg-blue-900 text-white font-bold rounded-full text-lg hover:bg-blue-800 transition-all duration-300">Submit Admission Request</button>

</form>

</div>

</div>

</div>

</div>

</div>



<!-- ========================================== -->

<!-- GALLERY PAGE -->

<!-- ========================================== -->

<div id="page-gallery" class="page-view pt-32 pb-24 bg-gray-50 min-h-screen hidden">

<div class="container mx-auto px-4 text-center mb-12">

<div class="mb-12">

<span class="text-yellow-500 font-extrabold tracking-wider uppercase text-sm mb-2 block">Campus Life</span>

<h2 class="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight uppercase">School Gallery</h2>

<div class="w-24 h-1 bg-yellow-500 mt-4 mx-auto"></div>

</div>

<p class="text-gray-600 max-w-2xl mx-auto text-lg mt-4">A showcase tracking actual classroom operations, community events, and everyday excellence inside Knowledge Fields Academy.</p>

</div>


<div class="container mx-auto px-4 max-w-7xl">

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div class="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-md border border-gray-100 bg-gray-200">

<img src="https://i.postimg.cc/tgrPZvCG/file-00000000655c722f878a4d1a064af438.png" alt="Students in uniforms" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">

<div class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">

<i class="fa-solid fa-star text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"></i>

</div>

</div>

<div class="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-md border border-gray-100 bg-gray-200">

<img src="https://i.postimg.cc/SQGXJtTS/file-00000000efe0722f8677f455b10ca4dc.png" alt="Smiling students close-up" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">

<div class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">

<i class="fa-solid fa-star text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"></i>

</div>

</div>

<div class="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-md border border-gray-100 bg-blue-950 p-4">

<img src="https://i.postimg.cc/QCKMM0Vf/file-00000000d318720abac0753f64768be3.png" alt="Tuition flyer" class="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500">

<div class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">

<i class="fa-solid fa-star text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"></i>

</div>

</div>

<div class="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-md border border-gray-100 bg-gray-200">

<img src="https://i.postimg.cc/pVc8X6cB/file-000000005198720aa2660219bd777744.png" alt="Official school signboard" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">

<div class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">

<i class="fa-solid fa-star text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"></i>

</div>

</div>

<div class="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-md border border-gray-100 bg-blue-950 p-4">

<img src="https://i.postimg.cc/gjcBmTJ6/Screenshot-20260506-090255-Lite.jpg" alt="Admission flyer" class="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500">

<div class="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">

<i class="fa-solid fa-star text-white text-3xl opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300"></i>

</div>

</div>

</div>

</div>

</div>



<!-- ========================================== -->

<!-- CONTACT PAGE -->

<!-- ========================================== -->

<div id="page-contact" class="page-view pt-32 pb-20 bg-gray-50 min-h-screen hidden">

<div class="container mx-auto px-4 max-w-6xl">

<div class="mb-12 text-center">

<span class="text-yellow-500 font-extrabold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>

<h2 class="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight uppercase">Contact Us</h2>

<div class="w-24 h-1 bg-yellow-500 mt-4 mx-auto"></div>

</div>


<div class="grid lg:grid-cols-3 gap-8 mb-16">

<div class="bg-white p-8 rounded-3xl shadow-md border-b-4 border-yellow-500 text-center flex flex-col items-center">

<div class="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">

<i class="fa-solid fa-phone text-2xl"></i>

</div>

<h3 class="font-bold text-xl text-blue-950 mb-4 uppercase">Call Us</h3>

<a href="tel:+260974674960" class="text-lg font-bold text-gray-700 hover:text-yellow-600 block mb-1">+260 974-674960</a>

<a href="tel:+260969378670" class="text-lg font-bold text-gray-700 hover:text-yellow-600 block mb-1">+260 969-378670</a>

<a href="tel:+260978542181" class="text-lg font-bold text-gray-700 hover:text-yellow-600 block mb-1">+260 978-542181</a>

</div>

<div class="bg-white p-8 rounded-3xl shadow-md border-b-4 border-yellow-500 text-center flex flex-col items-center">

<div class="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">

<i class="fa-regular fa-envelope text-2xl"></i>

</div>

<h3 class="font-bold text-xl text-blue-950 mb-4 uppercase">Email Us</h3>

<a href="mailto:pathiousmabinda@gmail.com" class="text-lg font-bold text-gray-700 hover:text-yellow-600 break-all">pathiousmabinda@gmail.com</a>

</div>

<div class="bg-white p-8 rounded-3xl shadow-md border-b-4 border-yellow-500 text-center flex flex-col items-center">

<div class="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">

<i class="fa-solid fa-map-location-dot text-2xl"></i>

</div>

<h3 class="font-bold text-xl text-blue-950 mb-4 uppercase">Location</h3>

<p class="text-lg font-bold text-gray-700">Along Kuku Road, Opposite Chawama Main SDA Church, Lusaka</p>

</div>

</div>



<div class="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">

<div class="md:w-1/2 bg-blue-950 p-12 text-white flex flex-col justify-center relative">

<h3 class="text-3xl font-extrabold mb-6 uppercase text-yellow-400">Send a Message</h3>

<p class="text-blue-100 mb-8 text-lg">Whether you have questions about entry evaluations, curriculum guidelines, or slot availabilities, fill out the form here.</p>

<div class="mt-auto">

<p class="font-bold mb-2">School Operating Hours:</p>

<p class="text-yellow-400">07:00 to 19:00 Monday to Friday</p>

</div>

</div>


<div class="md:w-1/2 p-8 md:p-12">

<div id="contact-success-msg" class="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200 hidden">

<i class="fa-regular fa-circle-check text-5xl text-green-500 mb-4"></i>

<h3 class="text-2xl font-bold mb-2">Message Sent!</h3>

<p class="text-lg font-medium">Thank you. We will get back to you shortly.</p>

</div>



<form id="contact-form" onsubmit="handleContactSubmit(event)" class="space-y-6">

<div>

<label class="block text-sm font-bold text-blue-950 mb-2">Full Name</label>

<input required type="text" id="contactName" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 bg-gray-50 outline-none">

</div>

<div>

<label class="block text-sm font-bold text-blue-950 mb-2">Phone Number</label>

<input required type="tel" id="contactPhone" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 bg-gray-50 outline-none">

</div>

<div>

<label class="block text-sm font-bold text-blue-950 mb-2">Message Description</label>

<textarea required rows="4" id="contactMessage" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 bg-gray-50 outline-none"></textarea>

</div>

<button type="submit" class="w-full py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold rounded-full text-lg shadow-md">Send Message</button>

</form>

</div>

</div>

</div>

</div>



</main>



<!-- FOOTER -->

<footer class="bg-blue-950 text-white pt-20 pb-10 border-t-8 border-yellow-500">

<div class="container mx-auto px-4">

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">


<div class="space-y-6">

<div class="flex items-center space-x-3">

<div class="w-14 h-14 bg-white rounded-full flex items-center justify-center p-0.5 border-2 border-yellow-500 overflow-hidden">

<img src="https://i.postimg.cc/Mpp3h442/Lite-(1).png" alt="Knowledge Fields Academy Logo" class="w-full h-full object-contain p-1">

</div>

<div class="flex flex-col">

<span class="text-xl font-black leading-none text-white tracking-wide uppercase">Knowledge Fields</span>

<span class="text-xs font-bold tracking-widest text-yellow-400 uppercase mt-1">Academy</span>

</div>

</div>

<p class="text-sm font-bold text-blue-200 italic">"Strive for Excellence"</p>

</div>



<div>

<h4 class="text-yellow-500 font-extrabold text-lg mb-6 uppercase">Quick Links</h4>

<ul class="space-y-3 font-medium">

<li><button onclick="navigateTo('home')" class="hover:text-yellow-400 transition-colors"><i class="fa-solid fa-chevron-right text-xs text-yellow-500 mr-2"></i> Home</button></li>

<li><button onclick="navigateTo('about')" class="hover:text-yellow-400 transition-colors"><i class="fa-solid fa-chevron-right text-xs text-yellow-500 mr-2"></i> About Us</button></li>

<li><button onclick="navigateTo('academics')" class="hover:text-yellow-400 transition-colors"><i class="fa-solid fa-chevron-right text-xs text-yellow-500 mr-2"></i> Academics & Tuitions</button></li>

<li><button onclick="navigateTo('admissions')" class="hover:text-yellow-400 transition-colors"><i class="fa-solid fa-chevron-right text-xs text-yellow-500 mr-2"></i> Admissions</button></li>

<li><button onclick="navigateTo('gallery')" class="hover:text-yellow-400 transition-colors"><i class="fa-solid fa-chevron-right text-xs text-yellow-500 mr-2"></i> Gallery</button></li>

</ul>

</div>



<div class="lg:col-span-2">

<h4 class="text-yellow-500 font-extrabold text-lg mb-6 uppercase">Contact Information</h4>

<ul class="space-y-4 font-medium text-blue-100">

<li class="flex items-start"><i class="fa-solid fa-map-pin text-yellow-500 mr-3 mt-1"></i> <span>Along Kuku Road, Opposite Chawama Main SDA Church, Lusaka</span></li>

<li class="flex items-center"><i class="fa-solid fa-phone text-yellow-500 mr-3"></i> <span>+260 974-674960 / +260 969-378670 / +260 978-542181</span></li>

<li class="flex items-center"><i class="fa-regular fa-envelope text-yellow-500 mr-3"></i> <span>pathiousmabinda@gmail.com</span></li>

<li class="flex items-center"><i class="fa-regular fa-clock text-yellow-500 mr-3"></i> <span>07:00 to 19:00 Monday to Friday</span></li>

</ul>

</div>



</div>


<div class="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300 font-medium">

<p>&copy; 2026 Knowledge Fields Academy. All rights reserved.</p>

</div>

</div>

</footer>



<!-- INTERACTIVE PAGE NAVIGATION SCRIPT -->

<script>

// Scroll Event Listener to change Nav BG

window.addEventListener('scroll', function() {

const navbar = document.getElementById('navbar');

const menuIcon = document.getElementById('menu-icon');

if (window.scrollY > 50) {

navbar.classList.remove('bg-transparent', 'py-6');

navbar.classList.add('bg-blue-950', 'shadow-lg', 'py-3');

} else {

navbar.classList.add('bg-transparent', 'py-6');

navbar.classList.remove('bg-blue-950', 'shadow-lg', 'py-3');

}

});



// Navigation Handler

function navigateTo(pageId) {

// Hide all pages

const pages = document.querySelectorAll('.page-view');

pages.forEach(page => page.classList.add('hidden'));



// Show active page

const targetPage = document.getElementById('page-' + pageId);

if(targetPage) {

targetPage.classList.remove('hidden');

}



// Close Mobile Menu if open

const mobileMenu = document.getElementById('mobile-menu');

mobileMenu.classList.add('hidden');

const menuIcon = document.getElementById('menu-icon');

menuIcon.className = "fa-solid fa-bars";



// Update Desktop Active States

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {

link.classList.remove('bg-yellow-500', 'text-blue-950');

link.classList.add('text-white', 'hover:text-yellow-400');

});



// Find matching index page to highlight

const navButtons = Array.from(links);

const activeMap = {

'home': 0, 'about': 1, 'academics': 2, 'admissions': 3, 'gallery': 4, 'contact': 5

};

const activeIdx = activeMap[pageId];

if (activeIdx !== undefined && navButtons[activeIdx]) {

navButtons[activeIdx].classList.remove('text-white', 'hover:text-yellow-400');

navButtons[activeIdx].classList.add('bg-yellow-500', 'text-blue-950');

}



// Scroll to Top

window.scrollTo({ top: 0, behavior: 'smooth' });

}



// Mobile Menu Handler

function toggleMobileMenu() {

const mobileMenu = document.getElementById('mobile-menu');

const menuIcon = document.getElementById('menu-icon');

if (mobileMenu.classList.contains('hidden')) {

mobileMenu.classList.remove('hidden');

menuIcon.className = "fa-solid fa-xmark";

} else {

mobileMenu.classList.add('hidden');

menuIcon.className = "fa-solid fa-bars";

}

}



// Form handlers

function handleAdmissionSubmit(event) {

event.preventDefault();

// Show Success Msg

document.getElementById('admission-form').classList.add('hidden');

document.getElementById('admission-success-msg').classList.remove('hidden');

}



function resetAdmissionForm() {

document.getElementById('admission-form').reset();

document.getElementById('admission-form').classList.remove('hidden');

document.getElementById('admission-success-msg').classList.add('hidden');

}



function handleContactSubmit(event) {

event.preventDefault();

// Show Contact Msg

document.getElementById('contact-form').classList.add('hidden');

document.getElementById('contact-success-msg').classList.remove('hidden');

setTimeout(() => {

document.getElementById('contact-form').reset();

document.getElementById('contact-form').classList.remove('hidden');

document.getElementById('contact-success-msg').classList.add('hidden');

}, 4000);

}

</script>

</body>

</html>

