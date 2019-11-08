feature 'view the airport page' do
  scenario 'a user can view the number of planes' do
    visit('/')
    expect(page).to have_content 0
  end
end
