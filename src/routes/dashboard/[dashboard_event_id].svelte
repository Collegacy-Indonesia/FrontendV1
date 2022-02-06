<script>
	import ApiService from '../../utils/api';

	import { radio, radioItems, text, textArea } from '../../components/admin/form_dto';
	import Form from '../../components/shared/form-generator.svelte';
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
				await apiSrv.postData(values);
			} catch (err) {
				alert(err.toString());
			}
		}}
		fields={[
			text('text', {
				id: 'nama',
				name: 'nama',
				label: 'Nama',
				required: true,
				placeholder: 'ex: Farhan Renaldi',
			}),
			text('text', {
				id: 'no_hp',
				name: 'no_hp',
				label: 'Nomor Handphone (WA)',
				required: true,
				placeholder: 'ex: 081234567890'
			}),
			text('text', {
				id: 'univ',
				name: 'universitas',
				label: 'Asal Universitas',
				required: true,
				placeholder: 'ex: Institut Teknologi Sepuluh Nopember'
			}),
			text('text', {
				id: 'jurusan',
				name: 'jurusan',
				label: 'Asal Jurusan',
				required: true,
				placeholder: 'ex: Teknik Dirgantara'
			}),
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
			text('text',{
				id: 'uname_ig',
				name: 'uname_ig',
				label: 'Username Instagram',
				required: true,
				placeholder: 'ex: @farhanrenaldi',
			}),
			text('text', {
				id: 'link_drive',
				name: 'link_drive',
				label:
					'Link drive berisi bukti follow akun instagram @collegacyindonesia, upload twibbon, bukti pembayaran',
				required: true,
				placeholder: ''
			}),
			text('text',{
				id: 'ref_code',
				name: 'ref_code',
				label: 'Referral Code',
				required: false,
				// TODO: change format referral code below to be collegacy referral code format
				placeholder: 'ex: ABC123',
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
