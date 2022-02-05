<script>
	let editing = false;

	let profileData = {
		fullName: 'Malik Akbar Hashemi Rafsanjani',
		email: 'edu.malikakbar2357@gmail.com',
		profilePicture: 'https://picsum.photos/200',
		institute: 'Institut Teknologi Bandung',
		phoneNumber: '081234567890',
		idLine: 'crossinglife'
	};

	const handleClick = () => {
		if (editing) {
			//TODO: connect to the backend
			console.log('SUBMITTING');
			console.log(profileData);
		}

		editing = !editing;
	};
</script>

<svelte:head>
	<title>Profile Page</title>
</svelte:head>
<div class="profile-container p-4 p-md-5">
	<div class="profile-top-section d-flex justify-content-between p-4 mb-4 mx-auto">
		<div class="profile-top-left-section d-flex flex-column flex-md-row mb-4 mb-md-0">
			<div class="profile-picture-container mr-3 mr-md-5 mb-md-0 mb-4">
				<img src={profileData.profilePicture} alt="Profile Picture" />
			</div>
			<div class="profile-identity-container">
				<div class="profile-input-field">
					<label for="fullname">Full Name</label>
					<input
						type="text"
						name="fullname"
						bind:value={profileData.fullName}
						disabled={!editing}
						class={'profile-input' + (editing ? '' : '-disabled')}
					/>
				</div>
				<div class="profile-input-field">
					<label for="email">Email</label>
					<input
						type="email"
						name="email"
						bind:value={profileData.email}
						disabled={!editing}
						class={'profile-input' + (editing ? '' : '-disabled')}
					/>
				</div>
			</div>
		</div>
		<div class="profile-top-right-section">
			<button class="btn btn-edit" on:click={handleClick}>{editing ? 'Submit' : 'Edit'}</button>
		</div>
	</div>
	<div class="profile-bottom-section p-4 mx-auto">
		<div class="profile-input-field">
			<label for="institute">Institute</label>
			<input
				type="text"
				name="institute"
				bind:value={profileData.institute}
				disabled={!editing}
				class={'profile-input' + (editing ? '' : '-disabled')}
			/>
		</div>
		<div class="profile-input-field">
			<label for="phone_number">Phone Number</label>
			<input
				type="text"
				name="phone_number"
				bind:value={profileData.phoneNumber}
				disabled={!editing}
				class={'profile-input' + (editing ? '' : '-disabled')}
			/>
		</div>
		<div class="profile-input-field">
			<label for="idline">ID Line</label>
			<input
				type="text"
				name="idline"
				bind:value={profileData.idLine}
				disabled={!editing}
				class={'profile-input' + (editing ? '' : '-disabled')}
			/>
		</div>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.profile-top-section,
	.profile-bottom-section {
		max-width: 1100px;
		background: #f7f5e9;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 16px;
	}
	.profile-picture-container {
		width: 120px;
		height: 120px;
	}
	.profile-picture-container > img {
		width: 100%;
		height: 100%;
		border-radius: 25px;
	}
	.profile-input-field {
		margin-bottom: 1rem;
	}
	label {
		display: block;
		font-weight: bold;
		font-size: 13px;
		line-height: 133.4%;
		color: #dab232;
	}
	.profile-input-field > input {
		font-weight: bold;
		font-size: 1.8125rem;
		line-height: 133.4%;
		color: #000000;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
  .profile-input-disabled {
    background: none;
    border: none;
  }
  .profile-input {
    padding: 5px 10px;
    border-radius: 10px;
  }

	.btn-edit {
		background: #000000;
		color: #fff;
		border-radius: 20px;
		width: 90px;
		height: 35px;
	}
  .profile-bottom-section input {
    width: 100%;
  }
	@media screen and (min-width: 768px) {
		.profile-picture-container {
			width: 200px;
			height: 200px;
		}
	}
  @media screen and (min-width: 1200px) {
		.btn-edit {
			width: 172px;
			height: 43.3px;
		}
  }
</style>
