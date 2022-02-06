<script>
	import ApiService from '../../utils/api';

	import { radio, radioItems, text } from '../../components/admin/form_dto';
	import { goto } from '$app/navigation';
	import { getUserProfile, logout, userContext } from '../../contexts/userContext';
	import Form from '../../components/shared/form-generator.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		getUserProfile();
	});
</script>

<div class="main-container">
	<h1 style="text-align:center;padding:1rem;">Collegacy Summit</h1>
	<p>
		Collegacy The Summit is a business competition held for college students to introduce and
		sharpen entrepreneurship skills with the hope the participants can create their startup. The
		competition will run as a combination of the hackathon and business competition. So, the
		participant can create an innovative startup within the Minimum Viable Product (MVP). This
		year's theme is "Shape The Future World through Innovation-Driven Entrepreneurship in The
		Society 5.0”.
	</p>
	<p>To register, fill the form below:</p>
	<Form
		submitFunction={async (values) => {
			const apiSrv = new ApiService('/summit-registrants');
			try {
				delete values.touched;
				await apiSrv.postData({ ...values, user_id: $userContext.id });
				goto('/dashboard');
			} catch (err) {
				alert(err.toString());
			}
		}}
		fields={[
			radio(
				[
					radioItems('2021', '2021', 2021),
					radioItems('2020', '2020', 2020),
					radioItems('2019', '2019', 2019),
					radioItems('2018', '2018', 2018)
				],
				{
					name: 'batch',
					label: 'Batch',
					id: 'batch'
				}
			),
			radio(
				[
					radioItems('hustler', 'Hustler', 'hustler'),
					radioItems('hacker', 'Hacker', 'hacker'),
					radioItems('hipster', 'Hispter', 'hipster')
				],
				{
					name: 'role',
					label: 'Role',
					id: 'role'
				}
			),
			radio(
				[
					radioItems('education', 'Education', 'education'),
					radioItems('health_care', 'Health Care', 'health_care'),
					radioItems('sme', 'SME', 'sme')
				],
				{
					name: 'case',
					label: 'Case',
					id: 'case'
				}
			),
			text('text', {
				id: 'link_drive',
				name: 'link_drive',
				label:
					'Link drive berisi bukti follow akun instagram @collegacyindonesia, upload twibbon, bukti pembayaran',
				required: true,
				placeholder: ''
			}),
			text('text', {
				id: 'ref_code',
				name: 'ref_code',
				label: 'Referral Code',
				required: false,
				// TODO: change format referral code below to be collegacy referral code format
				placeholder: 'ex: ABC123'
			})
		]}
	/>
</div>

<style>
	h1 {
		font-size: 2rem;
	}

	.main-container {
		padding: 3rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	p {
		font-weight: 700;
		text-align: justify;
	}
</style>
