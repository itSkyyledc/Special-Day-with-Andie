// Current page tracking
let currentPage = 1;
const totalPages = 3;

// Activity data with placeholders
const activityData = {
    brunch: {
        title: "☕ Coffee Project Castle ☕",
        icon: "🥐",
        time: "🕙 12:00 PM - 1:30 PM ✨",
        details: "Our fairy tale begins at Coffee Project! Like Belle and Beast's magical breakfast, we'll share delicious brunch treats and sweet conversations in this cozy, romantic setting. Perfect timing to start our enchanted day together! (Backup: Cafe Roo if you prefer!) 🏰💕",
        description: "Coffee Project offers the most magical brunch experience - from their signature coffee and pastries to cozy atmosphere, every moment feels like dining in a fairy tale castle! ✨"
    },
    activity1: {
        title: "🎬 Cinema76 Movie Kingdom 🎬",
        icon: "🎭",
        time: "🕐 2:00 PM - 4:10 PM ✨",
        details: "Like Cinderella at the royal ball, we'll enjoy a magical movie experience at Cinema76! In our cozy theater kingdom, we'll share popcorn, hold hands, and create beautiful memories watching stories unfold on the big screen! 🏰✨",
        description: "Cinema76 offers the most magical movie experience - with comfortable seats and great films, we'll have the perfect fairy tale afternoon being entertained together! 💫"
    },
    activity2: {
        title: "💆‍♀️ Massage 💆‍♀️",
        icon: "🌺",
        time: "🕐 4:10 PM - 5:00 PM 👑",
        details: "Just like Rapunzel in her tower, we'll be pampered like royalty at our magical spa! Gentle hands will help us feel like the prince and princess we are, relaxing in our own royal sanctuary after our movie adventure! 🏰✨",
        description: "Our spa sanctuary offers the most magical massage experience - perfect relaxation and pampering to prepare us for our grand finale dinner! 💫👑"
    },
    caferoo: {
        title: "🌸 Cafe Roo Alternative 🌸",
        icon: "☕",
        time: "🕐 12:00 PM - 1:30 PM ✨",
        details: "Like Belle and Beast's magical breakfast, we can start our fairy tale at Cafe Roo if you'd prefer to start a little later! This cozy castle offers the perfect romantic setting to begin our enchanted day together with delicious treats and sweet conversations! 🏰💕",
        description: "Cafe Roo offers a magical brunch experience - their cozy atmosphere and delicious menu make it the perfect alternative if you want to start our adventure at noon! ✨"
    },
    dinner: {
        title: "🍽️ Royal Feast at Wildflour Castle 🍽️",
        icon: "🏰",
        time: "🕕 6:00 PM - 8:00 PM - When dreams come true ✨",
        details: "Like Belle's enchanted dinner with Beast, we'll dine in the magical Wildflour Tomas Morato where fairy tale moments come to life! Their signature pasta, risotto, and desserts await us, and who knows what magical surprises the evening might bring... 🌹👑",
        description: "Wildflour Tomas Morato is the perfect fairy tale setting - their cozy atmosphere and delicious Italian cuisine will make this dinner feel like we're dining in a storybook castle! This is where our magical moment will unfold... 🏰✨"
    },
    surprise: {
        title: "🌟 A Magical Secret 🌟",
        icon: "🎁",
        time: "✨ When the stars align just right... 🌙",
        details: "Shhh... like Aladdin's magic carpet ride or Cinderella's midnight surprise, some enchantments can only happen when the moment is perfect! Our fairy tale has one more magical chapter waiting to unfold... 🪄💫",
        description: "Every Disney story has its most magical moment - ours is still a beautiful secret! 🤫✨👑"
    }
};

// Open the book
function openBook() {
    document.querySelector('.book-cover').style.display = 'none';
    document.querySelector('.book-pages').style.display = 'block';
    showPage(1);
}

// Page navigation
function showPage(pageNum) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show current page
    document.querySelector(`.page-${pageNum}`).classList.add('active');
    
    // Update page indicator
    document.getElementById('pageIndicator').textContent = `Page ${pageNum} of ${totalPages}`;
    
    // Update navigation buttons
    const prevBtn = document.querySelector('.page-navigation .nav-btn:first-child');
    const nextBtn = document.querySelector('.page-navigation .nav-btn:last-child');
    
    prevBtn.disabled = pageNum === 1;
    nextBtn.disabled = pageNum === totalPages;
    
    currentPage = pageNum;
}

function nextPage() {
    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
}

// Popup functionality
function showPopup(activityKey) {
    const activity = activityData[activityKey];
    if (!activity) return;
    
    // Populate popup content
    document.getElementById('popupTitle').textContent = activity.title;
    document.getElementById('popupIcon').textContent = activity.icon;
    document.getElementById('popupTime').textContent = activity.time;
    document.getElementById('popupDetails').textContent = activity.details;
    document.getElementById('popupDescription').textContent = activity.description;
    
    // Show popup
    document.getElementById('popupOverlay').classList.add('active');
    
    // Add magical entrance effect
    const popupContent = document.querySelector('.popup-content');
    popupContent.style.animation = 'none';
    setTimeout(() => {
        popupContent.style.animation = 'popupSlide 0.4s ease';
    }, 10);
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowLeft':
            previousPage();
            break;
        case 'ArrowRight':
            nextPage();
            break;
        case 'Escape':
            closePopup();
            break;
        case 'Enter':
            if (document.querySelector('.book-cover').style.display !== 'none') {
                openBook();
            }
            break;
    }
});

// Add floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '5';
    heart.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-out forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create floating Disney elements periodically
setInterval(createFloatingElement, 2500);

// Add floating Disney-style elements
function createFloatingElement() {
    const elements = ['💖', '✨', '🌟', '🌸', '🧚‍♀️', '👑', '🦋', '💫', '🌹', '💕'];
    const element = document.createElement('div');
    element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
    element.style.position = 'fixed';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = '100vh';
    element.style.fontSize = Math.random() * 15 + 15 + 'px';
    element.style.pointerEvents = 'none';
    element.style.zIndex = '5';
    element.style.animation = `floatUp ${Math.random() * 4 + 3}s ease-out forwards`;
    
    document.body.appendChild(element);
    
    setTimeout(() => {
        element.remove();
    }, 7000);
}

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .activity-card:hover .activity-icon {
        animation: bounce 0.6s ease-in-out;
    }
    
    .special-dinner:hover {
        background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    }
    
    .surprise-card:hover {
        background: linear-gradient(135deg, #ffd93d 0%, #ff6b6b 100%);
    }
`;
document.head.appendChild(style);

// Simple mobile-friendly animations (no scrolling parallax)

// Relationship Timer Function
function updateRelationshipTimer() {
    // Check if timer elements exist (they might be commented out)
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // If timer elements don't exist, just return
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        return;
    }
    
    // Set your relationship start date here - customize this to your exact moment!
    // Format: 'YYYY-MM-DDTHH:MM:SS' (24-hour format)
    // Examples:
    // '2024-08-15T14:30:00' = August 15th, 2024 at 2:30 PM
    // '2024-08-15T20:45:00' = August 15th, 2024 at 8:45 PM
    const startDate = new Date('2025-08-15T20:30:00'); // ← CHANGE THIS TO YOUR EXACT TIME!
    const now = new Date();
    
    // Calculate the difference in milliseconds
    const diffMs = now - startDate;
    
    // Convert to different time units
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    
    // Update the display
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

// Photo upload functionality with enhanced persistence
function setupPhotoUploads() {
    const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
    
    photoPlaceholders.forEach(placeholder => {
        // Remove any existing click listeners
        placeholder.removeEventListener('click', handlePhotoClick);
        
        // Add new click listener with proper event handling
        placeholder.addEventListener('click', handlePhotoClick);
    });
    
    // Ensure we have backup storage for critical photos
    ensureMinimumPhotoStorage();
}

// Enhanced photo storage with backup and minimum requirements
function ensureMinimumPhotoStorage() {
    // Check if we have at least 2 photos stored
    const storedPhotos = getStoredPhotoCount();
    
    if (storedPhotos < 2) {
        console.log(`Only ${storedPhotos} photos stored, ensuring minimum storage...`);
        
        // Create backup storage for critical photos
        const criticalPhotos = ['photo-dinner', 'photo-surprise'];
        
        criticalPhotos.forEach(photoId => {
            const existingPhoto = localStorage.getItem(photoId);
            if (!existingPhoto) {
                // Store a placeholder or default image for critical activities
                const defaultImage = createDefaultImage(photoId);
                if (defaultImage) {
                    localStorage.setItem(photoId, defaultImage);
                    console.log(`Created backup storage for ${photoId}`);
                }
            }
        });
    }
}

// Get count of stored photos
function getStoredPhotoCount() {
    const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
    let count = 0;
    
    photoPlaceholders.forEach(placeholder => {
        const photoId = placeholder.id;
        if (localStorage.getItem(photoId)) {
            count++;
        }
    });
    
    return count;
}

// Create a default placeholder image for critical activities
function createDefaultImage(photoId) {
    // Create a simple SVG placeholder that represents the activity
    const placeholders = {
        'photo-dinner': `<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="150" fill="#f0f8ff" stroke="#87ceeb" stroke-width="2"/>
            <text x="100" y="80" font-family="Arial" font-size="16" text-anchor="middle" fill="#4682b4">🍽️ Dinner Memory</text>
            <text x="100" y="100" font-family="Arial" font-size="12" text-anchor="middle" fill="#87ceeb">Tap to add photo</text>
        </svg>`,
        'photo-surprise': `<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="150" fill="#fff0f5" stroke="#dda0dd" stroke-width="2"/>
            <text x="100" y="80" font-family="Arial" font-size="16" text-anchor="middle" fill="#9370db">🌟 Special Moment</text>
            <text x="100" y="100" font-family="Arial" font-size="12" text-anchor="middle" fill="#dda0dd">Tap to add photo</text>
        </svg>`
    };
    
    return placeholders[photoId] ? `data:image/svg+xml;base64,${btoa(placeholders[photoId])}` : null;
}

// Safari compatibility detection and optimizations
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isIOSSafari = isSafari && isIOS;

// Safari-specific storage optimizations
function getSafariStorageLimit() {
    if (isIOSSafari) {
        // iOS Safari has stricter limits
        return 5 * 1024 * 1024; // 5MB conservative limit
    }
    return 10 * 1024 * 1024; // 10MB for other browsers
}

// Enhanced photo storage with Safari optimizations
function storePhoto(photoId, imageUrl) {
    try {
        // Check storage limits for Safari
        if (isIOSSafari) {
            const currentSize = getCurrentStorageSize();
            const newPhotoSize = imageUrl.length;
            const limit = getSafariStorageLimit();
            
            if (currentSize + newPhotoSize > limit) {
                console.warn(`Storage limit approaching on iOS Safari. Current: ${(currentSize/1024/1024).toFixed(2)}MB, New: ${(newPhotoSize/1024/1024).toFixed(2)}MB, Limit: ${(limit/1024/1024).toFixed(2)}MB`);
                
                // Try to compress the image for Safari
                const compressedImage = compressImageForSafari(imageUrl);
                if (compressedImage && compressedImage.length < imageUrl.length) {
                    imageUrl = compressedImage;
                    console.log(`Image compressed for Safari compatibility`);
                }
            }
        }
        
        // Primary storage in localStorage
        localStorage.setItem(photoId, imageUrl);
        
        // Backup storage in sessionStorage as fallback
        sessionStorage.setItem(photoId, imageUrl);
        
        // Store metadata about the photo
        const photoMetadata = {
            timestamp: Date.now(),
            size: imageUrl.length,
            stored: true,
            browser: isIOSSafari ? 'iOS Safari' : 'Other'
        };
        localStorage.setItem(`${photoId}_metadata`, JSON.stringify(photoMetadata));
        
        console.log(`Photo ${photoId} stored successfully with backup`);
        
        // Ensure minimum storage requirements
        ensureMinimumPhotoStorage();
        
        return true;
    } catch (error) {
        console.error(`Error storing photo ${photoId}:`, error);
        
        // Try alternative storage method
        try {
            sessionStorage.setItem(photoId, imageUrl);
            console.log(`Photo ${photoId} stored in sessionStorage as backup`);
            return true;
        } catch (backupError) {
            console.error(`Backup storage also failed for ${photoId}:`, backupError);
            return false;
        }
    }
}

// Get current storage size
function getCurrentStorageSize() {
    try {
        let totalSize = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                totalSize += localStorage[key].length;
            }
        }
        return totalSize;
    } catch (error) {
        return 0;
    }
}

// Compress images for Safari compatibility
function compressImageForSafari(imageUrl) {
    return new Promise((resolve) => {
        if (!isIOSSafari) {
            resolve(imageUrl); // No compression needed for other browsers
            return;
        }
        
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Calculate new dimensions (maintain aspect ratio)
            const maxWidth = 800;
            const maxHeight = 600;
            let { width, height } = img;
            
            if (width > height) {
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width = (width * maxHeight) / height;
                    height = maxHeight;
                }
            }
            
            canvas.width = width;
            canvas.height = height;
            
            // Draw and compress
            ctx.drawImage(img, 0, 0, width, height);
            
            // Use lower quality for Safari to reduce size
            const compressedUrl = canvas.toDataURL('image/jpeg', 0.7);
            resolve(compressedUrl);
        };
        
        img.onerror = () => resolve(imageUrl); // Fallback to original if compression fails
        img.src = imageUrl;
    });
}

// Enhanced photo retrieval with fallback
function retrievePhoto(photoId) {
    try {
        // Try localStorage first
        let photo = localStorage.getItem(photoId);
        
        if (!photo) {
            // Try sessionStorage as fallback
            photo = sessionStorage.getItem(photoId);
            if (photo) {
                console.log(`Retrieved ${photoId} from sessionStorage backup`);
            }
        }
        
        if (!photo) {
            // Try to restore from metadata if available
            const metadata = localStorage.getItem(`${photoId}_metadata`);
            if (metadata) {
                console.log(`Found metadata for ${photoId}, attempting recovery...`);
            }
        }
        
        return photo;
    } catch (error) {
        console.error(`Error retrieving photo ${photoId}:`, error);
        return null;
    }
}

// Setup activity card clicks
function setupActivityCards() {
    const activityCards = document.querySelectorAll('.activity-card');
    console.log('Setting up activity cards:', activityCards.length);
    
    activityCards.forEach(card => {
        card.addEventListener('click', function(e) {
            console.log('Activity card clicked:', e.target);
            
            // Check if click is on photo placeholder or its children
            if (e.target.closest('.activity-photo-placeholder')) {
                console.log('Photo area clicked, skipping popup');
                return; // Let photo handler take care of it
            }
            
            // Handle activity card popup
            const activityKey = card.dataset.activity;
            console.log('Activity key:', activityKey);
            if (activityKey) {
                showPopup(activityKey);
            }
        });
    });
}

function handlePhotoClick(e) {
    console.log('Photo placeholder clicked!');
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    const placeholder = e.currentTarget;
    
    // If photo already exists, show fullscreen on single click
    if (placeholder.classList.contains('has-photo')) {
        console.log('Photo exists, showing fullscreen');
        showFullscreen(placeholder);
        return false;
    }
    
    // No photo exists, trigger upload
    console.log('No photo, triggering upload');
    triggerPhotoUpload(placeholder);
    return false;
}

// Safari-optimized photo upload for iOS
function triggerPhotoUpload(placeholder) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';
    
    // Safari-specific optimizations
    if (isIOSSafari) {
        // Enable camera capture on iOS
        input.setAttribute('capture', 'environment');
        // Accept multiple image formats for better compatibility
        input.accept = 'image/jpeg,image/png,image/heic,image/heif';
    }
    
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // Safari-specific file validation
            if (isIOSSafari) {
                const maxSize = 10 * 1024 * 1024; // 10MB max for iOS
                if (file.size > maxSize) {
                    alert('⚠️ Photo is too large for iOS Safari. Please choose a smaller photo or take a new one.');
                    return;
                }
            }
            
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                
                // For iOS Safari, compress images before storage
                if (isIOSSafari) {
                    compressImageForSafari(imageUrl).then(compressedUrl => {
                        displayAndStorePhoto(placeholder, compressedUrl);
                    });
                } else {
                    displayAndStorePhoto(placeholder, imageUrl);
                }
            };
            
            reader.onerror = function() {
                if (isIOSSafari) {
                    alert('📱 Unable to read photo on iOS Safari. Please try taking a new photo.');
                } else {
                    alert('Unable to read photo. Please try again.');
                }
            };
            
            reader.readAsDataURL(file);
        }
    });
    
    // Safari-specific error handling
    input.addEventListener('error', function(e) {
        if (isIOSSafari) {
            console.error('iOS Safari photo upload error:', e);
            alert('📱 Photo upload failed on iOS Safari. Please try again or restart Safari.');
        }
    });
    
    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
}

// Helper function to display and store photos
function displayAndStorePhoto(placeholder, imageUrl) {
    // Set the background image
    placeholder.style.backgroundImage = `url(${imageUrl})`;
    placeholder.classList.add('has-photo');
    
    // Update the upload text
    const uploadText = placeholder.querySelector('.upload-text');
    if (uploadText) {
        uploadText.textContent = 'Tap to view';
    }
    
    // Store the image using enhanced persistence system
    const photoId = placeholder.id;
    const storageSuccess = storePhoto(photoId, imageUrl);
    
    if (storageSuccess) {
        console.log(`Photo ${photoId} stored successfully`);
        
        // Safari-specific success message
        if (isIOSSafari) {
            console.log('📱 Photo stored successfully on iOS Safari');
        }
    } else {
        console.warn(`Photo ${photoId} storage failed, but image is displayed`);
        
        if (isIOSSafari) {
            alert('⚠️ Photo displayed but storage failed on iOS Safari. Consider exporting photos soon.');
        }
    }
}

// Load saved photos from localStorage
function loadSavedPhotos() {
    const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
    
    photoPlaceholders.forEach(placeholder => {
        const photoId = placeholder.id;
        const savedPhoto = retrievePhoto(photoId); // Use the enhanced retrieval function
        
        if (savedPhoto) {
            placeholder.style.backgroundImage = `url(${savedPhoto})`;
            placeholder.classList.add('has-photo');
            
            const uploadText = placeholder.querySelector('.upload-text');
            if (uploadText) {
                uploadText.textContent = 'Tap to view';
            }
        }
    });
}

// Fullscreen functionality
let currentPlaceholder = null;

function showFullscreen(placeholder) {
    const modal = document.getElementById('fullscreenModal');
    const image = document.getElementById('fullscreenImage');
    const info = document.getElementById('fullscreenInfo');
    
    // Store reference to current placeholder
    currentPlaceholder = placeholder;
    
    // Get the image URL from the placeholder's background
    const backgroundImage = placeholder.style.backgroundImage;
    const imageUrl = backgroundImage.slice(5, -2); // Remove 'url("' and '")'
    
    // Set the image source
    image.src = imageUrl;
    
    // Set the info text based on the activity
    const activityTitle = placeholder.closest('.activity-card').querySelector('h3').textContent;
    info.textContent = `✨ ${activityTitle} Memory ✨`;
    
    // Show the modal
    modal.classList.add('active');
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreenModal');
    modal.classList.remove('active');
    
    // Clear current placeholder reference
    currentPlaceholder = null;
    
    // Restore body scrolling
    document.body.style.overflow = '';
}

// Change photo from fullscreen
function changePhotoFromFullscreen() {
    if (!currentPlaceholder) return;
    
    // Trigger photo upload for the current placeholder
    triggerPhotoUpload(currentPlaceholder);
}

// Keyboard support for fullscreen
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Add a magical loading effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in-out';
        document.body.style.opacity = '1';
    }, 100);
    
    // Start the relationship timer
    updateRelationshipTimer();
    setInterval(updateRelationshipTimer, 1000); // Update every second
    
    // Setup photo upload functionality with enhanced persistence
    setupPhotoUploads();
    loadSavedPhotos();
    
    // Check storage health and log status
    const healthReport = checkStorageHealth();
    console.log('📸 Photo Storage Health Report:', healthReport);
    
    // Safari-specific initialization
    if (isIOSSafari) {
        console.log('📱 iOS Safari detected - enabling optimizations');
        console.log('💡 Tips for iOS Safari:');
        console.log('   • Photos are automatically compressed for compatibility');
        console.log('   • Storage limit: 5MB (conservative estimate)');
        console.log('   • Export photos regularly to avoid storage issues');
        console.log('   • Use camera capture for best photo quality');
    }
    
    // Ensure minimum photo storage requirements
    ensureMinimumPhotoStorage();
    
    // Setup activity card clicks
    setupActivityCards();
    
    // No parallax needed for single-page mobile experience
    
    // Add click sound effect (optional - you can remove this if you don't want sound)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // You can add a subtle click sound here if desired
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 100);
        });
    });
});

// Add magical cursor trail effect
let mouseTrail = [];
document.addEventListener('mousemove', function(e) {
    mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    
    // Limit trail length
    if (mouseTrail.length > 10) {
        mouseTrail.shift();
    }
    
    // Create sparkle at mouse position occasionally
    if (Math.random() < 0.1) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = 'radial-gradient(circle, #ffd93d, transparent)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    sparkle.style.animation = 'sparkle-fade 0.8s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// Add sparkle fade animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-fade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Photo export/import functionality for backup
function exportPhotos() {
    try {
        const photoData = {};
        const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
        
        photoPlaceholders.forEach(placeholder => {
            const photoId = placeholder.id;
            const photo = retrievePhoto(photoId);
            if (photo) {
                photoData[photoId] = photo;
            }
        });
        
        const exportData = {
            timestamp: Date.now(),
            photoCount: Object.keys(photoData).length,
            photos: photoData
        };
        
        const dataStr = JSON.stringify(exportData);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `magical_photos_backup_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        console.log('Photos exported successfully');
        return true;
    } catch (error) {
        console.error('Error exporting photos:', error);
        return false;
    }
}

// Import photos from backup
function importPhotos(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const importData = JSON.parse(e.target.result);
                
                if (importData.photos && typeof importData.photos === 'object') {
                    let importedCount = 0;
                    
                    Object.keys(importData.photos).forEach(photoId => {
                        const photo = importData.photos[photoId];
                        if (photo && typeof photo === 'string') {
                            const success = storePhoto(photoId, photo);
                            if (success) importedCount++;
                        }
                    });
                    
                    console.log(`Successfully imported ${importedCount} photos`);
                    
                    // Reload photos to display imported ones
                    loadSavedPhotos();
                    
                    resolve(importedCount);
                } else {
                    reject(new Error('Invalid backup file format'));
                }
            } catch (error) {
                reject(error);
            }
        };
        
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
}

// Enhanced storage health check with Safari considerations
function checkStorageHealth() {
    const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
    const healthReport = {
        totalSlots: photoPlaceholders.length,
        storedPhotos: 0,
        criticalPhotos: 0,
        storageSpace: 'unknown',
        storageLimit: `${(getSafariStorageLimit() / 1024 / 1024).toFixed(2)} MB`,
        browser: isIOSSafari ? 'iOS Safari' : 'Other Browser',
        recommendations: []
    };
    
    photoPlaceholders.forEach(placeholder => {
        const photoId = placeholder.id;
        const photo = retrievePhoto(photoId);
        
        if (photo) {
            healthReport.storedPhotos++;
            
            // Check if it's a critical photo
            if (photoId === 'photo-dinner' || photoId === 'photo-surprise') {
                healthReport.criticalPhotos++;
            }
        }
    });
    
    // Check localStorage space
    try {
        const totalSize = getCurrentStorageSize();
        healthReport.storageSpace = `${(totalSize / 1024).toFixed(2)} KB`;
        
        const limit = getSafariStorageLimit();
        if (totalSize > limit * 0.8) { // 80% warning
            healthReport.recommendations.push('Storage space is getting full. Consider exporting photos.');
        }
        
        if (isIOSSafari && totalSize > limit * 0.9) {
            healthReport.recommendations.push('⚠️ iOS Safari storage limit approaching. Export photos soon!');
        }
    } catch (error) {
        healthReport.storageSpace = 'Unable to check';
    }
    
    // Add Safari-specific recommendations
    if (isIOSSafari) {
        healthReport.recommendations.push('📱 Using iOS Safari - photos will be automatically compressed for compatibility');
        
        if (healthReport.storedPhotos > 3) {
            healthReport.recommendations.push('💡 Consider exporting photos regularly on iOS Safari to avoid storage limits');
        }
    }
    
    // Add general recommendations
    if (healthReport.storedPhotos < 2) {
        healthReport.recommendations.push('Add at least 2 photos for better memory preservation.');
    }
    
    if (healthReport.criticalPhotos < 2) {
        healthReport.recommendations.push('Consider adding photos for dinner and surprise activities.');
    }
    
    return healthReport;
}

// Add helpful console commands for photo management
window.photoManager = {
    export: exportPhotos,
    import: importPhotos,
    health: checkStorageHealth,
    clear: function() {
        if (confirm('Are you sure you want to clear all stored photos? This cannot be undone.')) {
            const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
            photoPlaceholders.forEach(placeholder => {
                const photoId = placeholder.id;
                localStorage.removeItem(photoId);
                sessionStorage.removeItem(photoId);
                localStorage.removeItem(`${photoId}_metadata`);
                
                placeholder.style.backgroundImage = '';
                placeholder.classList.remove('has-photo');
                
                const uploadText = placeholder.querySelector('.upload-text');
                if (uploadText) {
                    uploadText.textContent = 'Tap to add photo';
                }
            });
            console.log('All photos cleared');
        }
    },
    list: function() {
        const photoPlaceholders = document.querySelectorAll('.activity-photo-placeholder');
        const photoList = {};
        
        photoPlaceholders.forEach(placeholder => {
            const photoId = placeholder.id;
            const photo = retrievePhoto(photoId);
            photoList[photoId] = photo ? 'Stored' : 'Not stored';
        });
        
        console.table(photoList);
        return photoList;
    }
};

// Log helpful commands to console
console.log('📸 Photo Management Commands:');
console.log('photoManager.export() - Export all photos as backup');
console.log('photoManager.health() - Check storage health');
console.log('photoManager.list() - List all photo storage status');
console.log('photoManager.clear() - Clear all stored photos (with confirmation)');
