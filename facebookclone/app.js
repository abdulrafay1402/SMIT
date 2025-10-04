// Simplified Facebook Clone - Post Creation
const login = () => {
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;
    // Perform login logic here
    if(email === "abdulrafay1402@hotmail.com" && password === "abcd1234"){  
        window.location.href = "home.html"; // Redirect to home page on successful login
    } else {
        alert("Invalid email or password");
    }
}
const createPost = () => {
    const profileImage = "profile.jpg";
    const postText = document.querySelector('.post-textarea').value.trim();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (postText === "" && !file) {
        alert("Please enter a post text or select a file");
        return;
    }

    // Create image HTML if file exists
    const imageHTML = file ? `<div class="post-image"><img src="${URL.createObjectURL(file)}" alt="Post image" style="width: 100%; height: auto; max-height: none;" /></div>` : '';

    const formattedText = postText.length > 200 
        ? `${postText.substring(0, 200)}... <span class="see-more" onclick="toggleText(this)">See More</span><span class="full-text" style="display:none">${postText.substring(200)} <span class="see-more" onclick="toggleText(this)">See Less</span></span>`
        : postText;

    document.getElementById('postsContainer').innerHTML = `
    <div class="post">
        <div class="post-header">
            <img src="${profileImage}" alt="Abdul Rafay" />
            <div class="post-info">
                <span class="post-author">Abdul Rafay</span>
                <span class="post-time">${new Date().toLocaleString()}</span>
            </div>
            <div class="post-menu">
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="post-content">
            ${postText ? `<div class="post-text">${formattedText}</div>` : ''}
            ${imageHTML}
        </div>
        <div class="post-stats">
            <div class="post-likes">
                <i class="fa-solid fa-thumbs-up"></i>
                <span>0</span>
            </div>
            <div class="post-comments-share">
                <span>0 comments</span>
                <span>0 shares</span>
            </div>
        </div>
        <div class="post-actions">
            <div class="post-action like" onclick="toggleLike(this)">
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Like</span>
            </div>
            <div class="post-action comment">
                <i class="fa-regular fa-comment"></i>
                <span>Comment</span>
            </div>
            <div class="post-action share" onclick="sharePost(this)">
                <i class="fa-regular fa-share-from-square"></i>
                <span>Share</span>
            </div>
        </div>
    </div>` + document.getElementById('postsContainer').innerHTML;

    // Clear form
    document.querySelector('.post-textarea').value = "";
    fileInput.value = "";
    bootstrap.Modal.getInstance(document.getElementById('createPostModal')).hide();
}

function toggleLike(btn) {
    const icon = btn.querySelector('i');
    const count = btn.closest('.post').querySelector('.post-likes span');
    const num = parseInt(count.textContent);
    
    if (icon.classList.contains('fa-regular')) {
        icon.className = 'fa-solid fa-thumbs-up';
        icon.style.color = '#2374e1';
        btn.style.color = '#2374e1';
        count.textContent = num + 1;
    } else {
        icon.className = 'fa-regular fa-thumbs-up';
        icon.style.color = '';
        btn.style.color = '';
        count.textContent = num - 1;
    }
}

function sharePost(btn) {
    const count = btn.closest('.post').querySelector('.post-comments-share span:last-child');
    const num = parseInt(count.textContent);
    count.textContent = `${num + 1} shares`;
}

function toggleText(span) {
    const fullText = span.closest('.post-text').querySelector('.full-text');
    const seeMore = span.textContent === 'See More';
    
    if (seeMore) {
        span.style.display = 'none';
        fullText.style.display = 'inline';
    } else {
        fullText.style.display = 'none';
        span.closest('.post-text').querySelector('.see-more').style.display = 'inline';
    }
}